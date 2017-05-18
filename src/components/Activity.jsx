import React from 'react';
import PropTypes from 'prop-types';

import {
  FBComments,
  FBCommentsCount,
  FBEmbedPost,
  FBEmbedVideo,
  FBFollow,
  FBLike,
  FBPage,
  FBSend,
  FBShare
} from 'facebook-plugins';

export default class Activity extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <div style = {{textAlign: "center", background: "#cccccc"}}>
                  <FBEmbedPost appId=""
                    href="https://www.facebook.com/NthuCarelife/photos/a.245781942154058.56815.219698824762370/1362670917131816/?type=3&permPage=1"
                    width={"750"}
                    locale="zh_TW"
                  />
              </div>
            </div>
        );
    }
}
