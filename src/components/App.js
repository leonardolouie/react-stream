import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import StreamCreate from './StreamCreate';
import StreamEdit from './StreamEdit';
import StreamDelete from './StreamDelete';
import StreamList from './StreamList';
import StreamShow from './StreamShow';

class App extends React.Component{

    render()
    {

        return(
         <div>
            <BrowserRouter>
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