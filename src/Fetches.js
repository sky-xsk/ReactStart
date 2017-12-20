import React from 'react';
import { render } from 'react-dom';

const wishGists = (PassedComponent)=>(
    class WishGists extends React.Component{
        state={
            gists:[]
        }

        componentDidMount(){
            fetch("https://api.github.com/gists/public").then(r=>r.json()).then(
                gists=>this.setState({gists})
            )
        }

        render(){
            return <PassedComponent {...this.props} gists={this.state.gists} />
        }
    }
)

const Gish = ({id,html_url,files})=>{
    <div>
        <a href={html_url}>{id}</a>
        <ul>
            {Object.entries(files).map(([filename,data])=>
                <li><a href={data.raw_url} key={filename}>{filename}</a></li>
            )}
        </ul>
    </div>
}

const Gists = ({gists})=>{
    <div>
        <h1>Gists</h1>
        {
            gists.map(gist=>
                <div key={gist.id}>
                    <Gist {...gist} />
                </div>
            )
        }
    </div>
}

const GistList = wishGists(Gists);

render(<GistList />,document.getElementById('root'));
