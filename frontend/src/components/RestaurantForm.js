import React from 'react';

export default class RestaurantForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      english_name: props.restaurant ? props.restaurant.english_name : '',
      chinese_name: props.restaurant ? props.restaurant.chinese_name : '',
      address: props.restaurant ? props.restaurant.address : '',
      phone: props.restaurant ? props.restaurant.phone : '',
      introduction: props.restaurant ? props.restaurant.introduction : '',
      hours: props.restaurant ? props.restaurant.hours : '',
      error: ''
    };
  }
  onEnglisthNameChange = (e) => {
    const english_name = e.target.value;
    this.setState(() => ({ english_name }));
  };
  onChineseNameChange = (e) => {
    const chinese_name = e.target.value;
    this.setState(() => ({ chinese_name }));
  };
  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };
  onPhoneChange = (e) => {
    const phone = e.target.value;
    this.setState(() => ({ phone }));
  };
  onIntroductionChange = (e) => {
    const introduction = e.target.value;
    this.setState(() => ({ introduction }));
  };
  onHoursChange = (e) => {
    const hours = e.target.value;
    this.setState(() => ({ hours }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log('Submiting ', this.state)

    if (!this.state.english_name || !this.state.chinese_name || !this.state.address) {
      this.setState(() => ({ error: 'Please provide names and address.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        english_name: this.state.english_name,
        chinese_name: this.state.chinese_name,
        address: this.state.address,
        phone: this.state.phone,
        introduction: this.state.introduction,
        hours: this.state.hours
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="English Name"
          autoFocus
          className="text-input"
          value={this.state.english_name}
          onChange={this.onEnglisthNameChange}
        />
        <input
          type="text"
          placeholder="Chinese Name"
          className="text-input"
          value={this.state.chinese_name}
          onChange={this.onChineseNameChange}
        />
        <input
          type="text"
          placeholder="Address"
          className="text-input"
          value={this.state.address}
          onChange={this.onAddressChange}
        />
        <input
          type="text"
          placeholder="Phone"
          className="text-input"
          value={this.state.phone}
          onChange={this.onPhoneChange}
        />
        <textarea
          placeholder="Introduction"
          className="textareaa"
          value={this.state.introduction}
          onChange={this.onIntroductionChange}
        >
        </textarea>
        <textarea
          placeholder="Hours"
          className="textareaa"
          value={this.state.hours}
          onChange={this.onHoursChange}
        >
        </textarea>
        <div>
          <button className="button">Save Restaurant</button>
        </div>
      </form>
    )
  }
}
