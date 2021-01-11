import Autosuggest from 'react-autosuggest';
import React from 'react';
import theme from "./inputSuggest.css"

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <span>
    {suggestion.name}
  </span>
);

export default class InputSuggest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value?this.props.value:"",
      input: "",
      suggestions: []
    };
  }


      getSuggestions = (value) => {

    const inputValue = value.toLowerCase();
    this.props.getData(inputValue);
    fetch(`https://inputtools.google.com/request?text=${inputValue}&itc=mr-t-i0-und&num=13&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage`)
                .then(resp => resp.json())
                .then(suggestions =>{
                    var res=suggestions[1][0][1];
                    
                    var s=res.map((i)=>{return {"name":i,"year":i}})
                    
                    if(inputValue[inputValue.length-1]===" ")
                      this.setState({value:s[0]["name"],suggestions:s, input: inputValue})
                    else
                      this.setState({suggestions:s, input: inputValue})          
                });
    console.log(this.state.input);
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue.trim()
    });

  };
  onSuggestionsFetchRequested = ({ value }) => {
      this.getSuggestions(value)

  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search by Book name / Author name',
      value,
      onChange: this.onChange
    };

    return (
      <div className="input-box" height={this.props.height} onKeyDown={this.props.onKeyDown}>
		<Autosuggest
      theme={theme}
			suggestions={suggestions}
			onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
			onSuggestionsClearRequested={this.onSuggestionsClearRequested}
			getSuggestionValue={getSuggestionValue}
			renderSuggestion={renderSuggestion}
			inputProps={inputProps}
		/>
      </div>
    );
  }
}