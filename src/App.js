import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard'
import CreateForm from './components/CreateForm'
import EditForm from './components/EditForm'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/author/edit/:id" element={<EditForm />} />
        <Route path="/author/new" element={<CreateForm />} />
      </Routes>
    </div>
  );
}

export default App;
