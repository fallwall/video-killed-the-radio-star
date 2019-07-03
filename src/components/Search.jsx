import React from 'react';

export default function Search(props) {
  return (
    <>
      <div className="search-area">
        <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
          <input type="text" name="userInput" placeholder="SEARCH VIMEO FOR MORE ..." />
          <button>Search</button>
        </form>
      </div>
    </>
  )
}