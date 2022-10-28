import { useState } from "react";
import { useParams } from "react-router-dom";

export const GameDetails = ({ games, addComment }) => {
  const { gameId } = useParams();
  const [comment, setComment] = useState({
    username: "",
    comment: "",
  });

  const [error, setError] = useState({
    username: '',
    comment: ''
  });

  // The better way here is to make a get request to the server and get the game information
  const game = games.find((x) => x._id == gameId);

  const addCommentHandler = (e) => {
    e.preventDefault();

    const result = `${comment.username}: ${comment.comment}`;
    addComment(gameId, result);
  };

  const onChange = (e) => {
    setComment((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const validateUsername = (e) => {
    const value = e.target.value;
    let errorMessage = '';

    if ( value.length < 4 ) {
      errorMessage = `Username can't be that short`;
    } else if ( value.length > 10 ) {
      errorMessage = `Username can't be that long`;
    }
    
    setError(state => ({
      ...state,
      [e.target.name] : errorMessage
    }));

  } 

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>
        {/* Bonus ( for Guests and Users ) */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {
              /* Optional chaining game?. */
              game.comments?.map((x, i) => {
                return (
                  <li key={i} className="comment">
                    <p>{x}</p>
                  </li>
                );
              })
            }
            {!game.comments || !game.comments.length  && 
              <p className="no-comment">No comments.</p>
            }
          </ul>
        </div>
        {/* Edit/Delete buttons ( Only for creator of this game )  */}
        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>
      {/* Bonus */}
      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
          {error.username && 
            <div style={{color: 'red'}}>{error.username}</div>
          }
          <input
            type="text"
            name="username"
            placeholder="John Doe"
            onChange={onChange}
            onBlur={validateUsername}
            value={comment.username}
          />
          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={onChange}
            value={comment.comment}
          />
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>
    </section>
  );
};
