import React from 'react';

function Search(props) {


  return (
    <>
      <div className="search-area">

        <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
          <input type="text" name="userInput" placeholder="Search keyword..." />
          <button>Search</button>
        </form>
      </div>
    </>
  )


}

export default Search;