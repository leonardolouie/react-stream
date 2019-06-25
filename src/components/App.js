import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import GoogleAuth from './GoogleAuth';

import StreamCreate from './StreamCreate';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamList from './StreamList';
import StreamShow from './StreamShow';
import Header from './Header';



class App extends React.Component{

    render()
    {
        
     return(

         <div>
        
            <BrowserRouter>
            <GoogleAuth />
             <Header/>
                <div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit' exact component={StreamEdit} />
                    <Route path='/streams/delete' exact component={StreamDelete} />
                    <Route path='/streams/show' exact component={StreamShow} />
                </div>
             </BrowserRouter>
        </div>
     
        )
    }
}

export default App;