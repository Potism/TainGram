import React, { useState } from "react";
import { Button } from "@/components/ui";
import { useUserContext } from "@/context/AuthContext";

const FollowButton = ({ userIdToFollow }) => {
  const { user } = useUserContext();
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    // You can implement the follow logic here, for example, using an API call.
    // For simplicity, this example toggles the follow state.
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };

  // If the user is viewing their own profile, hide the Follow button.
  if (user.id === userIdToFollow) {
    return null;
  }

  return (
    <div>
      <Button
        type="button"
        className={`shad-button_primary2 px-8 ${
          isFollowing ? "bg-gray-500" : ""
        }`}
        onClick={handleFollow}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
    </div>
  );
};

export default FollowButton;
