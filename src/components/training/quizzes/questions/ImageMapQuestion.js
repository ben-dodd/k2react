<<<<<<< HEAD
import React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import ImageMapper from "../../../../config/ImageMapper";

class ImageMapQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageMap: {}
    };
=======
import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import ImageMapper from '../../../../config/ImageMapper'

class ImageMapQuestion extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imageMap: {}
    }
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d

    // this.onChanged = this.onChanged.bind(this);
  }

  UNSAFE_componentWillMount() {
    let imageMap = {
      name: this.props.q.uid,
      areas: []
<<<<<<< HEAD
    };
    this.props.q.map.forEach(area => {
      imageMap.areas.push({
        _id: area.label,
        shape: area.shape,
        coords: area.coords.split(",")
      });
    });

    this.setState({
      imageMap: imageMap
    });
=======
    }
    this.props.q.map.forEach((area) => {
      imageMap.areas.push({
        _id: area.label,
        shape: area.shape,
        coords: area.coords.split(',')
      })
    })

    this.setState({
      imageMap: imageMap
    })
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
  }

  // onChanged = e => {
  //   this.setState({ value: e.target.value });
  // };

  render() {
<<<<<<< HEAD
    const { q } = this.props;

    return (
      <div style={{ marginTop: 24 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend"> {q.question}</FormLabel>
=======
    const { q } = this.props

    return (
      <div style={{ marginTop: 24 }}>
        <FormControl component='fieldset'>
          <FormLabel component='legend'> {q.question}</FormLabel>
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
          <ImageMapper
            src={q.src}
            imgWidth={q.imgWidth}
            width={600}
            map={this.state.imageMap}
<<<<<<< HEAD
            fillColor="rgba(255, 87, 51, 0.2)"
            strokeColor="rgba(255, 87, 51, 0.8)"
            selectedArea={q.selected}
            onClick={(obj, num, event) => {
              this.props.onChanged(q.uid, obj, this.props.single);
=======
            fillColor='rgba(255, 87, 51, 0.2)'
            strokeColor='rgba(255, 87, 51, 0.8)'
            selectedArea={q.selected}
            onClick={(obj, num, event) => {
              this.props.onChanged(q.uid, obj, this.props.single)
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
            }}
          />
        </FormControl>
        <hr />
      </div>
<<<<<<< HEAD
    );
  }
}

export default ImageMapQuestion;
=======
    )
  }
}

export default ImageMapQuestion
>>>>>>> 19df57755d0c04c09358c8f67c601c2eec2f6e8d
