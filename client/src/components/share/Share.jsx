import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState(null);
  const [showMap, setShowMap] = useState(false);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();

    const post = { desc, img: imgUrl };
    if (location) {
      post.latitude = location.latitude;
      post.longitude = location.longitude;
    }

    mutation.mutate(post);
    setDesc("");
    setFile(null);
  };

  const handleAddPlace = () => {
    setShowMap(!showMap); // Toggle map visibility
  };

  useEffect(() => {
    const handleLocation = async () => {
      if (navigator.geolocation) {
        try {
          const position = await navigator.geolocation.getCurrentPosition((pos) => {
            setLocation({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
          });
        } catch (error) {
          console.error("Error getting location:", error);
          // Handle location access errors gracefully
        }
      } else {
        console.warn("Geolocation is not supported by this browser.");
      }
    };

    handleLocation();
  }, []);
  
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
          <img
              src={
                currentUser.profilePic
                  ? `/upload/${currentUser.profilePic}`
                  : "https://via.placeholder.com" 
              }
              alt=""
            />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item" onClick={handleAddPlace}>
              <img src={Map} alt="" />
              <span>Show Place</span>
            </div>

          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
      {showMap && location && (
        <div className="location-container">
          <p>Your latitude: {location.latitude}</p>
          <p>Your longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default Share;