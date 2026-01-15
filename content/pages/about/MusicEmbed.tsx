import React from "react";

const MusicEmbed = () => {
  return (
    <>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2174955716&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/vijethph"
          title="vijethph"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          vijethph
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/vijethph/sets/personal-piano-covers"
          title="Personal Piano Covers"
          target="_blank"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Personal Piano Covers
        </a>
      </div>
    </>
  );
};

export default MusicEmbed;
