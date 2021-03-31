import React from 'react'
import Button from '../../components/UI/Button/Button'

const FindVideo = ({
  findMovies,
  submitHandler,
  inputChangedHandler,
  movieToFind
}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <form onSubmit={submitHandler}>
      <input
        onChange={e => inputChangedHandler(e)}
        label="title"
        placeholder="movie title: Harry Potter"
      />
      hello
      <Button
        btnType="Success"
        clicked={() => findMovies()}
        disabled={movieToFind.length === 0}
      >
        SUBMIT
      </Button>
    </form>
  </div>
)

export default FindVideo
