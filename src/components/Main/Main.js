import React, {Component} from "react"

import "./Main.css"
import {shareStory} from "../../modules/StoryShare";
import {getWindowSearchWithoutSign, getAllStartParams, getStoryDataFromRef} from "../../modules/StartParams";

class Main extends Component {

  state = {
    vkRefParsed: null,
    vkRef: '',
    startParams: {},
    search: '',
  };

  componentDidMount() {
    const startParams = getAllStartParams();

    this.setState({
      vkRefParsed: getStoryDataFromRef(startParams.ref),
      vkRef: startParams.ref,
      startParams: startParams,
      search: getWindowSearchWithoutSign()
    });
  }

  render () {
    const {vkRefParsed, vkRef, startParams, search} = this.state;

    return (
      <div className="Main">
        {vkRefParsed &&
          <div className="VkRefParsed section">
            <div className="VkRefParsed__title section__title">
              vk_ref parsed:
            </div>
            <div className="VkRefParsed__content section__content">
              {Object.keys(vkRefParsed).map(key => <div key={key}>{key}: {key === 'story_id' ? <b>{vkRefParsed[key]}</b> : vkRefParsed[key]}</div>)}
            </div>
          </div>
        }
        <div className="VkRef section">
          <div className="VkRef__title section__title">
            vk_ref:
          </div>
          <div className="VkRef__content section__content">
            {vkRef}
          </div>
        </div>
        <div className="StartParams section">
          <div className="StartParams__title section__title">
            Start params:
          </div>
          <div className="StartParams__content section__content">
            {Object.keys(startParams).map(key => <div key={key}>{key}: {startParams[key]}</div>)}
          </div>
        </div>
        <div className="WindowSearch section">
          <div className="WindowSearch__title section__title">
            Location search:
          </div>
          <div className="WindowSearch__content section__content">
            {search}
          </div>
        </div>
        <div className="StoryShare section">
          <div className="StoryShare__title section__title">
            Story sharing:
          </div>
          <button className="StoryShare__button" onClick={shareStory}>
            share
          </button>
        </div>
        <div className="StoryShare section">
          <div className="StoryShare__title section__title">
            <span>Story sharing result:</span>
            <span className="StoryShare__clear"
                  onClick={() => document.querySelector('.StoryShare__content').textContent = ''}>
              clear
            </span>
          </div>
          <div className="StoryShare__content section__content">
          </div>
        </div>
      </div>
    )
  }
}

export default Main
