import { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export function Counter() {

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);


  return (
    <div className="counter-like-dislike">
      {/* <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button> */}
      
      
      <Badge fontSize='small' badgeContent={like} color="primary">
      <button className="like-dislike" onClick={() => setLike(like + 1)}>👍</button>
      </Badge>

      <Badge fontSize='small' badgeContent={dislike} color="error">
      <button className="like-dislike" onClick={() => setDislike(dislike + 1)}>👎</button>
      </Badge>
    </div>
  );

}
