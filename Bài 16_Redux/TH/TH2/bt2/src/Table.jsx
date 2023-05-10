import React, { useState } from "react";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import { addArticle, removeArticle, removeUser } from "./store/couter";

export default function Table() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleAddArticle = (userId, article) => {
    if (article !== "") {
      dispatch(addArticle({ userId, article }));
    }
  };

  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId));
  };

  const handleRemoveArticle = (userId, articleId) => {
    dispatch(removeArticle({userId, articleId}));
    console.log('userId:', userId);
    console.log('articleId: ',articleId );
  };

  const onSubmit = (e, userId) => {
    e.preventDefault();
    const article = e.target.elements.article.value;
    handleAddArticle(userId, article);
    e.target.reset();
  };

  return (
    <div>
      <table style={{ width: "600px", border: "1px solid black" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Articles</th>
            <th>Tuỳ chọn</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <form onSubmit={(e) => onSubmit(e, user.id)}>
                  <label htmlFor="article">Article</label>
                  <div>
                    <input type="text" name="article" />
                    <button type="submit">Add</button>
                  </div>
                </form>
                <ul>
                  {user.articles.map((article) => {
                    return (
                      <li key={article.id}>
                        {article.article}
                        <button
                          onClick={() =>
                            handleRemoveArticle(user.id, article.id)
                          }
                        >
                          Xoá
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </td>
              <td>
                <button onClick={() => handleRemoveUser(user.id)} type="button">
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
