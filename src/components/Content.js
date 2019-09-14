import React, { Component } from 'react';
import Showcase from './Showcase';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import GithubScreenshot from '../images/github.png';

class Content extends Component {
    state = {
        search: '',
        algorithms: [
            {name: 'Fizzbuzz', description: 'Replaces any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz".', code:"fizzbuzz", output: "fizzbuzzout"},
            {name: 'Palindromes', description: 'Checks to see if a word says the exact same thing when reversed', code: "palindromes", output: "palindromesout"},
            {name: 'Steps', description: 'Prints out steps (#) n number of times while maintaing spaces', code: "steps", output: "stepsout"},
            {name: 'Anagrams', description: 'Checks to see if two given strings can form each other by just rearranging the letters', code: "anagrams", output: "anagramsout"},
            {name: 'Fibonacci', description: 'Prints the nth term from the fibonacci series', code: "fib", output: "fibout"}
        ]
    }
    handleChange = e => {
        this.setState({search:e.target.value});
    }
    render () {
        let filteredAlgs = this.state.algorithms.filter(alg => alg.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);

        return (
            <div className="Content">
                <div className="container">
                    <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search filter"/>
                    {filteredAlgs.map(alg => {
                    return (
                        <Fade>
                            <Showcase name={alg.name} function={alg.description} code={alg.code} output={alg.output} />
                        </Fade>
                    )
                    
                    })}
                    <br/>
                    <hr/>
                    <br/>
                    <div className="footer">
                        <h2>Github</h2>
                        <br/>
                        <Zoom>
                            <img src={GithubScreenshot} width="500"/>
                        </Zoom>
                        
                        <button className="btn btn-outline-primary">View Repository</button>
                        <br/>
                        <br/>
                        <p>Developed by Idrak Mustahsin</p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Content;