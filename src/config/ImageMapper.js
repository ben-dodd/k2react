<<<<<<< HEAD
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageMapper extends Component {
  constructor(props) {
    super(props);
    ["drawrect", "drawcircle", "drawpoly", "initCanvas"].forEach(
      f => (this[f] = this[f].bind(this))
    );
    let absPos = { position: "absolute", top: 0, left: 0 };
    this.styles = {
      container: { position: "relative" },
      canvas: { ...absPos, pointerEvents: "none", zIndex: 2 },
      img: { ...absPos, zIndex: 1, userSelect: "none" },
      map: (props.onClick && { cursor: "pointer" }) || undefined
    };
=======
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImageMapper extends Component {
  constructor(props) {
    super(props)
    ;['drawrect', 'drawcircle', 'drawpoly', 'initCanvas'].forEach((f) => (this[f] = this[f].bind(this)))
    let absPos = { position: 'absolute', top: 0, left: 0 }
    this.styles = {
      container: { position: 'relative' },
      canvas: { ...absPos, pointerEvents: 'none', zIndex: 2 },
      img: { ...absPos, zIndex: 1, userSelect: 'none' },
      map: (props.onClick && { cursor: 'pointer' }) || undefined
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.width !== this.props.width) {
      // re-draw canvas with the new width
<<<<<<< HEAD
      this.initCanvas();
=======
      this.initCanvas()
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    }
  }

  drawrect(coord) {
<<<<<<< HEAD
    coord = coord.split(",");
    let [left, top, right, bot] = coord;
    this.ctx.strokeRect(left, top, right - left, bot - top);
    this.ctx.fillRect(left, top, right - left, bot - top);
  }

  drawcircle(coords) {
    coords = coords.split(",");
    this.ctx.beginPath();
    this.ctx.arc(coords[0], coords[1], coords[2], 0, 2 * Math.PI);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  drawpoly(coords) {
    coords = coords
      .split(",")
      .reduce((a, v, i, s) => (i % 2 ? a : [...a, s.slice(i, i + 2)]), []);
    this.ctx.beginPath();
    let first = coords.unshift();
    this.ctx.moveTo(first[0], first[1]);
    coords.forEach(c => this.ctx.lineTo(c[0], c[1]));
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  initCanvas() {
    if (this.props.width) this.img.width = this.props.width;
    if (this.props.height) this.img.height = this.props.height;
    this.canvas.width = this.props.width || this.img.clientWidth;
    this.canvas.height = this.props.height || this.img.clientHeight;
    this.container.style.width =
      (this.props.width || this.img.clientWidth) + "px";
    this.container.style.height =
      (this.props.height || this.img.clientHeight) + "px";
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = this.props.fillColor;
    this.ctx.strokeStyle = this.props.strokeColor;
    this.ctx.lineWidth = this.props.lineWidth;
    if (this.props.onLoad) this.props.onLoad();
  }

  hoverOn(area, index, event) {
    const shape = event.target.getAttribute("shape");
    if (this.props.active && this["draw" + shape])
      if (this.props.selectedArea === undefined) {
        this["draw" + shape](event.target.getAttribute("coords"));
      } else if (this.props.selectedArea.includes(area) === false) {
        this["draw" + shape](event.target.getAttribute("coords"));
      }
    if (this.props.onMouseEnter) this.props.onMouseEnter(area, index, event);
=======
    coord = coord.split(',')
    let [left, top, right, bot] = coord
    this.ctx.strokeRect(left, top, right - left, bot - top)
    this.ctx.fillRect(left, top, right - left, bot - top)
  }

  drawcircle(coords) {
    coords = coords.split(',')
    this.ctx.beginPath()
    this.ctx.arc(coords[0], coords[1], coords[2], 0, 2 * Math.PI)
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.fill()
  }

  drawpoly(coords) {
    coords = coords.split(',').reduce((a, v, i, s) => (i % 2 ? a : [...a, s.slice(i, i + 2)]), [])
    this.ctx.beginPath()
    let first = coords.unshift()
    this.ctx.moveTo(first[0], first[1])
    coords.forEach((c) => this.ctx.lineTo(c[0], c[1]))
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.fill()
  }

  initCanvas() {
    if (this.props.width) this.img.width = this.props.width
    if (this.props.height) this.img.height = this.props.height
    this.canvas.width = this.props.width || this.img.clientWidth
    this.canvas.height = this.props.height || this.img.clientHeight
    this.container.style.width = (this.props.width || this.img.clientWidth) + 'px'
    this.container.style.height = (this.props.height || this.img.clientHeight) + 'px'
    this.ctx = this.canvas.getContext('2d')
    this.ctx.fillStyle = this.props.fillColor
    this.ctx.strokeStyle = this.props.strokeColor
    this.ctx.lineWidth = this.props.lineWidth
    if (this.props.onLoad) this.props.onLoad()
  }

  hoverOn(area, index, event) {
    const shape = event.target.getAttribute('shape')
    if (this.props.active && this['draw' + shape])
      if (this.props.selectedArea === undefined) {
        this['draw' + shape](event.target.getAttribute('coords'))
      } else if (this.props.selectedArea.includes(area) === false) {
        this['draw' + shape](event.target.getAttribute('coords'))
      }
    if (this.props.onMouseEnter) this.props.onMouseEnter(area, index, event)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  hoverOff(area, index, event) {
    if (this.props.active) {
<<<<<<< HEAD
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (
        this.props.selectedArea !== undefined &&
        this.props.selectedArea.length > 0
      ) {
        const { imgWidth, width } = this.props;
        // calculate scale based on current 'width' and the original 'imgWidth'
        const scale = width && imgWidth && imgWidth > 0 ? width / imgWidth : 1;
        const scaleCoords = coords => coords.map(coord => coord * scale);
        this.props.selectedArea.forEach(area => {
          this["draw" + area.shape](scaleCoords(area.coords).join(","));
        });
      }
    }
    if (this.props.onMouseLeave) this.props.onMouseLeave(area, index, event);
=======
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      if (this.props.selectedArea !== undefined && this.props.selectedArea.length > 0) {
        const { imgWidth, width } = this.props
        // calculate scale based on current 'width' and the original 'imgWidth'
        const scale = width && imgWidth && imgWidth > 0 ? width / imgWidth : 1
        const scaleCoords = (coords) => coords.map((coord) => coord * scale)
        this.props.selectedArea.forEach((area) => {
          this['draw' + area.shape](scaleCoords(area.coords).join(','))
        })
      }
    }
    if (this.props.onMouseLeave) this.props.onMouseLeave(area, index, event)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  click(area, index, event) {
    if (this.props.onClick) {
<<<<<<< HEAD
      event.preventDefault();
      this.props.onClick(area, index, event);
=======
      event.preventDefault()
      this.props.onClick(area, index, event)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
    }
  }

  renderAreas() {
<<<<<<< HEAD
    const { imgWidth, width } = this.props;
    // calculate scale based on current 'width' and the original 'imgWidth'
    const scale = width && imgWidth && imgWidth > 0 ? width / imgWidth : 1;
    // method that is used to scale each area coordinates
    const scaleCoords = coords => coords.map(coord => coord * scale);
=======
    const { imgWidth, width } = this.props
    // calculate scale based on current 'width' and the original 'imgWidth'
    const scale = width && imgWidth && imgWidth > 0 ? width / imgWidth : 1
    // method that is used to scale each area coordinates
    const scaleCoords = (coords) => coords.map((coord) => coord * scale)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    return this.props.map.areas.map((area, index) => (
      <area
        key={area._id || index}
<<<<<<< HEAD
        alt=""
        shape={area.shape}
        coords={scaleCoords(area.coords).join(",")}
=======
        alt=''
        shape={area.shape}
        coords={scaleCoords(area.coords).join(',')}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        onMouseEnter={this.hoverOn.bind(this, area, index)}
        onMouseLeave={this.hoverOff.bind(this, area, index)}
        onClick={this.click.bind(this, area, index)}
        href={area.href}
      />
<<<<<<< HEAD
    ));
=======
    ))
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  render() {
    return (
<<<<<<< HEAD
      <div style={this.styles.container} ref={node => (this.container = node)}>
=======
      <div style={this.styles.container} ref={(node) => (this.container = node)}>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <img
          style={this.styles.img}
          src={this.props.src}
          useMap={`#${this.props.map.name}`}
<<<<<<< HEAD
          alt=""
          ref={node => (this.img = node)}
          onLoad={this.initCanvas}
          onClick={this.props.onImageClick}
        />
        <canvas ref={node => (this.canvas = node)} style={this.styles.canvas} />
=======
          alt=''
          ref={(node) => (this.img = node)}
          onLoad={this.initCanvas}
          onClick={this.props.onImageClick}
        />
        <canvas ref={(node) => (this.canvas = node)} style={this.styles.canvas} />
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
        <map name={this.props.map.name} style={this.styles.map}>
          {this.renderAreas()}
        </map>
      </div>
<<<<<<< HEAD
    );
=======
    )
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }
}

ImageMapper.defaultProps = {
  active: true,
<<<<<<< HEAD
  fillColor: "rgba(255, 255, 255, 0.5)",
  lineWidth: 1,
  map: {
    areas: [],
    name: "image-map-" + Math.random()
  },
  strokeColor: "rgba(0, 0, 0, 0.5)"
};
=======
  fillColor: 'rgba(255, 255, 255, 0.5)',
  lineWidth: 1,
  map: {
    areas: [],
    name: 'image-map-' + Math.random()
  },
  strokeColor: 'rgba(0, 0, 0, 0.5)'
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

ImageMapper.propTypes = {
  active: PropTypes.bool,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  lineWidth: PropTypes.number,
  map: PropTypes.shape({
    areas: PropTypes.arrayOf(
      PropTypes.shape({
        area: PropTypes.shape({
          coords: PropTypes.arrayOf(PropTypes.number),
          href: PropTypes.string,
          shape: PropTypes.string
        })
      })
    ),
    name: PropTypes.string
  }),
  onClick: PropTypes.func,
  onImageClick: PropTypes.func,
  onLoad: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  src: PropTypes.string.isRequired,
  strokeColor: PropTypes.string,
  width: PropTypes.number,
  imgWidth: PropTypes.number
<<<<<<< HEAD
};
=======
}
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
