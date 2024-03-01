import React, { useState, useRef, useEffect } from "react";

export const Player3 = () => {
	const [state, setState] = useState({
		currentIndex: 0,
		songs: [
			{
				title: "South Park",
				id: "south-park",
				author: "Kyle",
				url:
					"https://assets.breatheco.de/apis/sound/files/cartoons/songs/south-park.mp3"
			},
			{
				title: "Thunder Cats",
				id: "thundercats",
				author: "Moonra",
				url:
					"https://assets.breatheco.de/apis/sound/files/cartoons/songs/thundercats.mp3"
			},
			{
				title: "X-Men",
				id: "x-men",
				author: "Profesor",
				url:
					"https://assets.breatheco.de/apis/sound/files/cartoons/songs/x-men.mp3"
			}
		]
	});

	// var player = useRef(null);
    var player = useRef(null);
	var playBtn = useRef(null);
	var pauseBtn = useRef(null);

	// useEffect(() => {
	// 	pauseBtn.style.display = "none";
	// }, []);

	const play = index => {
		const url = state.songs[index].url;
		if (url) player.src = url;
		console.log(player.currentTime)

		player.play();
		playBtn.style.display = "none";
		pauseBtn.style.display = "inline-block";
		setState({...state, currentIndex: index });
	};

	const pause = () => {
		player.pause();
		pauseBtn.style.display = "none";
		playBtn.style.display = "inline-block";
	};


	var songs = state.songs.map((song, i) => {
		return (
			<div
				key={i}
				className={`track ${state.currentIndex == i ? "active" : ""}`}
				onClick={() => {
					play(i);
				}}>
				<div className="track__number">{i + 1}</div>
				<div className="track__title featured">
					<span className="title">{song.title}</span>
				</div>
			</div>
		);
	});

	return (
		<div className="player">
			<section className="content">
				<div className="tracks">{songs}</div>
			</section>
			<section className="current-track">
				<div className="current-track__actions">
					<a
						href="#"
						className="skipbackward"
						onClick={() => play(state.currentIndex - 1)}>
						<i className="fas fa-caret-square-left" />
					</a>
					<a
						href="#"
						ref={elm => playBtn = elm}
						onClick={() => {
                            console.log(player);
                            play(state.currentIndex)
                        }}>
						<i className="fas fa-play" />
					</a>
					<a href="#" 
                        ref={elm => pauseBtn = elm} 
                        onClick={() => pause()}>
						<i className="fas fa-pause-circle" />
					</a>
					<a
						href="#"
						className="skipforward"
						onClick={() => play(state.currentIndex + 1)}>
						<i className="fas fa-caret-square-right" />
					</a>
				</div>
			</section>
			<audio ref={elm => player = elm} controls />
		</div>
	);
};
