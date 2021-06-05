import React, { Component } from 'react'
import '../App.css'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { csv } from 'd3-fetch'
import { select } from 'd3-selection'
import { axisLeft } from 'd3-axis'
import { nest } from 'd3-collection'
import saveAs from 'file-saver'

function getGMapSummary(gmap) {
  var i, offset = 0
  var gmap_summary = {}
  for(i = 0; i < gmap.length; i++) {
    let g_size = max(gmap[i].values.map(function (d) { return d.distance} ))
    gmap_summary[gmap[i].key] = {
      name: gmap[i].key,
      order: i,
      num_markers: gmap[i].values.length,
      lg_size: g_size,
      offset: offset
    }
    offset += g_size
  }
  gmap_summary['map_size'] = offset
  return gmap_summary
}



class LinkageGroup extends Component {
  constructor(props){
    super(props)
    this.createLG = this.createLG.bind(this)
  }
  componentDidMount() {
    this.createLG()
  }
  componentDidUpdate() {
    this.createLG()
  }

  createLG() {
    const node = this.node
    const width = this.props.size[1]
//    const genetic_map = csv('/data/LR74_scores.csv', d => ({
    const genetic_map = csv('./genomevis/data/LR26_dmap_input.csv', d => ({
      distance: +d.cm,
      lgroup: d.lg,
      rb_chr: d.rb_chr.split(':')[0]
    }))
/*    const color_map = {
      LcChr1: '#FF24009F',
      LcChr2: '#E567179F',
      LcChr3: '#FDD0179F',
      LcChr4: '#5FFB179F',
      LcChr5: '#4EE2EC9F',
      LcChr6: '#0041C29F',
      LcChr7: '#E3319D9F',
      na: '#000000'
    }
*/
  const color_map = {
    LcChr1: '#FF2400',
    LcChr2: '#fe9922',  //#E56717
    LcChr3: '#FDD017',
    LcChr4: '#5FFB17',
    LcChr5: '#4EE2EC',
    LcChr6: '#0041C2',
    LcChr7: '#E3319D',
    na: '#999999'
  }


    const lg_color = {
      LG1: '#FF24009F',
      LG2: '#E567179F',
      LG3: '#FDD0179F',
      LG4: '#5FFB179F',
      LG5: '#4EE2EC9F',
      LG6: '#0041C29F',
      LG7: '#E3319D9F'
    }


    genetic_map.then(function(data) {
      var mydat = nest()
        .key(function(d) { return d.lgroup })
        .entries(data)
      var gmap_summary = getGMapSummary(mydat)

      const dataMax = gmap_summary['map_size']
      const xPosition = 80
      const yPosition = 150
      const barDistance  = 80
      const barWidth = 25
//      const yScale = scaleLinear()
//          .domain([0, dataMax])
//          .range([0, width])
//      const yScale = scaleLinear()
//          .domain([0, 1360])
//          .range([0, 480])
      const yScale = scaleLinear()
          .domain([0, 860])
          .range([0, 480])



      /* concatenated view
      mydat.forEach(function(d,i){
        let mydata = d.values.map(function (d) { return d.distance} )
        let lg_offset = gmap_summary[d.key].offset
        // console.log(gmap_summary[d.key])

        select(node)
          .append('g')
          .selectAll('line')
          .data(mydata)
          .enter()
          .append('line')
          .style('stroke', '#fe9922')
          .attr('LG', d.key)
          .attr('value',d => d)
          .attr('plot_value', d => d+lg_offset)
        .attr('x1', d => yScale(d+lg_offset)-10)
        .attr('y1', 50)
        .attr('x2', d => yScale(d+lg_offset)-10)
        .attr('y2', 100)
        .attr('stroke-width', 0.1)

      }) */

//      console.log(gmap_summary)

      /** per linkage view **/

      /* draw axis */
      var y_axis = axisLeft().scale(yScale).ticks(5);
      select(node)
        .append('g')
         .attr('transform', 'translate(50, 140)')
         .style('font', '16px arial')
         .call(y_axis)


      /* draw frame */
      select(node)
       .append('g')
       .append('rect')
       .attr('x', 50)
       .attr('y', yPosition-40)
       .attr('width', 600)
       .attr('height', 390)
       .style('stroke', '#000000')
       .style('fill','none')
       .attr('stroke-width', 2)



      mydat.forEach(function(d,i){
        let mydata = d.values.map(function (d) { return [d.distance,color_map[d.rb_chr]]} )
        let lg_offset = gmap_summary[d.key].offset
//        let lg_size = gmap_summary.values.map(function (d) { return d.lg_size} )
        //console.log(gmap_summary[d.key])

        /* draw frame */
         select(node)
           .append('g')
           .append('rect')
           .attr('rx', 12)
           .attr('ry', 12)
           .attr('x', xi => xPosition + barDistance*i - 1)
           .attr('y', yPosition - 20)
           .attr('width', barWidth+2)
           .attr('height', yScale(gmap_summary[d.key].lg_size)+20)
           .style('stroke', '#000000')
           .style('fill-opacity',0.1)
           .style('fill', lg_color[d.key]);

        /* draw data points */
        select(node)
          .append('g')
          .selectAll('line')
          .data(mydata)
          .enter()
          .append('line')
          .style('stroke', d => d[1])
          .attr('LG', d.key)
          .attr('value',d => d[0])
          .attr('plot_value', d => d[0]+lg_offset)
        .attr('x1', xi => xPosition + barDistance*i)
        .attr('y1', yi => yPosition + yScale(yi[0])-10)
        .attr('x2', xi => xPosition + barDistance*i+barWidth)
        .attr('y2', yi => yPosition + yScale(yi[0])-10)
        .attr('stroke-width', 1)

        /* draw labels */
        select(node)
          .append('g')
          .append('text')
          .attr('x', xPosition + barDistance*i-5)
          .attr('y', 90)
          .text(d.key)
          .style('font', '20px arial')


      })

/*
      // refactor export button
      select('#exportPNG').on('click', function(){
        let width = 800
        let height = 800
        var html = select('#myid2')
          .attr("title", "test2")
          .attr("version", 1.1)
          .attr("xmlns", "http://www.w3.org/2000/svg")
          .innerHTML
          //.parentNode //.innerHTML;
        console.log(html)

        var blob = new Blob([node.parentNode], {type: "image/svg+xml"});
        saveAs(blob, "myProfile.svg");

      });
*/

      //

      console.log(node)
    })
   }

render() {
      return <svg className='LGLinear' width={800} height={500}>
      <g className='LG' ref={node => this.node = node}></g>
      </svg>
   }
}
export default LinkageGroup
