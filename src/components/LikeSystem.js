import React, {Component} from 'react';
import c from "classnames";
import ProgressBar from './ProgressBar';

class LikeSystem extends Component{
	constructor(props){
		super(props)
		this.state={
			like: 0,
		    dislike: 0,
		    likeActive: false,
		    dislikeActive: false
		}
	}

	
	componentWillReceiveProps(nextProps) {
		this.setState({
			dislike: nextProps.filmDislikes,
			like: nextProps.filmLikes
		})
  	}

	setDislike() {
	    this.setState({
	      dislikeActive: !this.state.dislikeActive,
	      dislike: this.state.dislikeActive
	        ? this.state.dislike - 1
	        : this.state.dislike + 1
	    });
  	}
	setLike() {
	    this.setState({
	      likeActive: !this.state.likeActive,
	      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
	    });
	}

  	handleLike() {
	    if (this.state.dislikeActive) {
	      this.setLike();
	      this.setDislike();
	    }
	    this.setLike();
  	}

  	handleDislike() {
	    if (this.state.likeActive) {
	      this.setDislike();
	      this.setLike();
	    }
	  	 this.setDislike();
  	}

	render(){
		const maximum = this.state.like + this.state.dislike;
		return(
			<div>
				<ProgressBar color={"#3b3a3f"} width={"250px"} value={this.state.like} max={maximum}/>
				<div className="likeComponent">
					<button
			          onClick={() => this.handleLike()}
			          className={c({ ["active"]: this.state.likeActive })}
			        >
			          <i className='fa fa-thumbs-up'>{this.state.like}</i>
			        </button>
			        <button
			          className={c({ ["active"]: this.state.dislikeActive })}
			          onClick={() => this.handleDislike()}
			        >
			          <i className='fa fa-thumbs-down'>{this.state.dislike}</i>
			          
			        </button>
				</div>
			</div>
			)
	}

}export default LikeSystem;