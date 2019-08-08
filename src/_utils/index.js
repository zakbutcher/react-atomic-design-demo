const keysToIgnore = ["children"];

export const getClassName = props => {
  const propKeys = Object.keys(props);
  return propKeys.reduce((className, key) => {
    if (keysToIgnore.includes(key)) {
      return className;
    } else if (!props[key]) {
      return className;
    }
    return `${className} ${props[key]}`;
  }, "");
};

export const videoList = [
  {
    title: "How to make Terrain in Unity!",
    author: "Brackeys",
    views: "9.6K",
    uploaded: "10 hours ago",
    imgUrl:
      "https://i.ytimg.com/vi/MWQv2Bagwgk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC9XjulyoVJG5_MlP7vpZdeDwOfgw"
  },
  {
    title: "Let's Build a React Native App: Migrating to React Hooks",
    author: "Harry Wolff",
    views: "9.6K",
    uploaded: "2 days ago",
    imgUrl:
      "https://i.ytimg.com/vi/fov4Tbigv5E/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAZeJlp28iwqX6Z9kSmqwmoVBrvWQ"
  },
  {
    title: "Learn To Build a Racing Drone - Part 1 - Introduction",
    author: "Joshua Bardwell",
    views: "9.6K",
    uploaded: "3 weeks ago",
    imgUrl:
      "https://i.ytimg.com/vi/bmIQOS8Dqqo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAlJoqdfrhObJh84WEX8LjQ42yFMw"
  },
  {
    title: "Flying in a blue dream",
    author: "Gab707",
    views: "1.2K",
    uploaded: "4 days ago",
    imgUrl:
      "https://i.ytimg.com/vi/NISkB3KNbwM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBrD-DNJgxy_O3QHQ7LMCkDGF52DQ"
  },
  {
    title: "CAN I LIFT THE WORLD'S HEAVIEST STONE?",
    author: "Juji & Tom",
    views: "158K",
    uploaded: "17 hours ago",
    imgUrl:
      "https://i.ytimg.com/vi/Y3Ewgbtwfzk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCWckPtOcdT_sc6YJRWzXR3f32ggw"
  }
];
