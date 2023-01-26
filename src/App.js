import React from 'react';
import './App.css';
import Todos from './myComponents/Todos';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import InputTask from './myComponents/InputTask';
import { useState, useEffect} from 'react';
import { createRoot } from "react-dom/client";
import About from './myComponents/About';
import FuzzySearch from 'fuzzy-search'; //fuzzy search algorithm

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  //functiont to add task
  const addTask = (title, desc) => {
    let sno = Date.now();
    let tempTodo = {
      sno : sno,
      title: title, 
      desc: desc,
      complete: false
    }
    setTodos([...todos, tempTodo]);
  }

  //function to mark the task complete
  const onComplete = (todo) => {
    //first removing the task and then adding it to the bottom
    var tempVar = {
      sno: Date.now(),
      title: todo.title,
      desc: todo.title,
      complete: !todo.complete
    }

    setTodos([...todos.filter((e) => {
      return e !== todo;
    }), tempVar]);
  }

  //function to delete the todo
  const onDelete = (todo) => {
    console.log(todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
 
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  //Fuzzy search implementation
  const searcher = new FuzzySearch(todos, ['title', 'desc', 'sno'], {
    caseSensitive: true,
  });

  const fuzzSearch = (searchinput) => {
    const outputArray = searcher.search(searchinput);
    console.log(outputArray);

    outputArray.forEach((todo) => {
      console.log(todos.indexOf(todo));
      setTodos([ todo , ...todos.filter((e) => {
        return e !== todo;
      })]);
    })
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <InputTask addTask={addTask}/>
          <Todos onDelete={onDelete} todos={todos} onComplete={onComplete}/>
        </>
      ),
    },
    {
      path: "/about",
      element: (<About />)
    },
  ]);

  return (
    <>
      <Header keepSearch={true} title="Task Manager" fuzzy={fuzzSearch}/>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
