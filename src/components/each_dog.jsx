import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import {getDog} from 'states/each-actions.js';

import 'decorations/page_frame.css';
import 'decorations/adopt-intro.css';
import 'decorations/jquery.fancybox-thumbs.css';
import 'decorations/jquery.fancybox.css';

class Each extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func,
        id: PropTypes.string,
        dogInfo: PropTypes.object,
        loading: PropTypes.bool,
    };

    constructor(props) {
        super(props);

        const {dispatch, id} = this.props;
        dispatch(getDog(id.id));
    }

    componentDidMount() {

    }


    render() {
        window.scrollTo(0, 0);

        let dog = (
            <div style = {{textAlign: "center"}}>
                <img src = "loading.gif" style = {{width: "40%"}}/>
            </div>
        );

        let photos = [(
          <div className = "gallery-item">
						<h1>No any picture.</h1>
					</div>
        )];

        const {dogInfo, loading} = this.props;

        if(dogInfo && !loading) {
          //  console.log(dogInfo.photos_big.length);
            if(dogInfo.photos_big.length > 0) {
                photos = [];
                for(let i = 0; i<dogInfo.photos_big.length; i++) {
                  photos.push(
                    (
                      <div className = "gallery-item" key={i}>
                        <a className="grouped_elements" rel="group1" href={"dog/" + dogInfo.id + "/" + dogInfo.photos_big[i]}>
                        <img src = {"dog/" + dogInfo.id + "/" + dogInfo.photos_small[i]} />
                        </a>
                      </div>
                    )
                  );
                }
            }

            dog = (
                <div>
                  <div id = "Mobile">
                    <div>
                      <h1>{dogInfo.name}</h1>
                    </div>
                  </div>

                  <div className = "basic-infor">
                    <div id = "information">
                      <img src = {dogInfo.photos_small.length && ("dog/" + dogInfo.id + "/" + dogInfo.photos_small[0])}/>
                      <div id = "Desktop">
                        <div>
                          <h2>{dogInfo.name}</h2>
                        </div>
                      </div>
                      <p>
                      <span>特徵：</span>
                      {dogInfo.spot}
                      <br/>
                      <span>出沒地區：</span>
                      {dogInfo.location}
                      <br/>
                      <span>說明：</span>
                      {dogInfo.info}
                      </p>
                    </div>
                    <div className = "story">
                      <h2>小故事：</h2>
                      <p>
                      {dogInfo.story}
                      </p>
                    </div>
                    <div className = "murmur">
                      <h2>社員碎碎念：</h2>
                      <p>
                      {dogInfo.murmur}
                      </p>
                    </div>
                    <div className = "photo-gallery">
                        {photos}
                    </div>
                  </div>
                </div>
            );
        }
        return (
          <div>
              <div className = "content-wrapper">
                  {dog}
              </div>
          </div>
        );
    }
}
export default connect(state => ({
    ...state.eachdog
}))(Each);
