import React from 'react';

import FormControl from '@material-ui/core/FormControl';
<<<<<<< HEAD
import FormLabel from '@material-ui/core/FormLabel';
=======
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
>>>>>>> 947a2ba95b689774eab952b8a181ffa246ab3010

import ImageMapper from '../../config/ImageMapper';

class ImageMapQuestion extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      imageMap: {},
    }

    // this.onChanged = this.onChanged.bind(this);
  }

  componentWillMount(){
    let imageMap = {
      name: this.props.q.uid,
      areas: [],
    };
    this.props.q.map.forEach(area => {
      imageMap.areas.push({
        _id: area.label,
        shape: area.shape,
        coords: area.coords.split(','),
      });
    });

    this.setState({
      imageMap: imageMap,
    });
  };

  // onChanged = e => {
  //   this.setState({ value: e.target.value });
  // };

  render() {
    const { q } = this.props;

    return (
      <div style = {{ marginTop: 24 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend"> { q.question }</FormLabel>
          <ImageMapper
            src={q.src}
            imgWidth={q.imgWidth}
            width={600}
            map={this.state.imageMap}
            fillColor='rgba(255, 87, 51, 0.2)'
            strokeColor='rgba(255, 87, 51, 0.8)'
            selectedArea={q.selected}
            onClick={(obj, num, event) => {
                this.props.onChanged(q.uid, obj, this.props.single);
              }}
            />
        </FormControl>
        <hr />
      </div>
    )

  }
}

export default ImageMapQuestion;
