import React, { Component } from 'react'
import './SectionForm.css'
import axios from 'axios'


class PostForm extends Component {



    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            text: '',
            isChecked: false
        }


    }


    handleCheck = e => {
        this.setState({ isChecked: e.target.checked })
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)


        axios({
            method: 'post',
            url: 'http://jsonplaceholder.typicode.com/posts',
            headers: { "content-type": "application/json" },
            data: this.state
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

    }



    render() {


        return (
            <div className="form">
                <div className="section-form-container">
                    <div className="text-container-form">
                        <p id="text-header" className="text-title">Nie znalazles odpowiedniego kontaktu?</p>
                        <p id="paragraph" className="text-title">Skorzystaj z formularza</p>
                    </div>
                    <div className="form-container">
                        <form onSubmit={this.submitHandler} action="/action-page" className="form-total">

                            <div className='first-last-container'>
                                <div className='label-first-container'>
                                    <input
                                        className="first-name"
                                        type="text"
                                        name="firstName"
                                        value={this.firstName}
                                        onChange={this.changeHandler}
                                        placeholder="Imię"
                                        required

                                    />
                                    <label for="firstName">Imię</label>
                                </div>
                                <div className='label-last-container'>
                                    <input
                                        className="last-name"
                                        type="text"
                                        name="lastName"
                                        value={this.lastName}
                                        placeholder="Nazwisko"
                                        onChange={this.changeHandler}
                                        required
                                    />
                                    <label for="last-name">Nazwisko</label>
                                </div>
                            </div>
                            <div className='label-email-container'>
                                <input
                                    className="form-email"
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Adres e-mail"
                                    value={this.email}
                                    onChange={this.changeHandler}
                                    required
                                />
                                <label for="email">Adres e-mail</label>
                            </div>
                            <div className='label-text-container'>
                                <textarea id="text" name="text" className='text-form' placeholder="Treść wiadomości" value={this.text} onChange={this.changeHandler} required></textarea>
                                <label for="text">Treść wiadomości</label>
                            </div>
                            <div className="checkbox-container">
                                <div className="checkbox-itself">
                                    <input
                                        onChange={this.handleCheck}
                                        type="checkbox"
                                        checked={this.isChecked}
                                        className="form-checkbox"
                                    />
                                </div>
                                <p className='checkbox-text'>Wyrażam zgodę na przetwarzanie moich danych osobowych w rozumieniu ustawy z dnia 29 sierpnia 1997 roku o ochronie danych osobowych oraz ustawy z dnia 16 lipca 2004 roku Prawo telekomunikacyjne w celach marketingowych przez Collegium Da Vinci i oświadczam, iż podanie przeze mnie danych osobowych jest dobrowolne oraz iż zostałem poinformowany o prawie żądania dostępu do moich danych osobowych, ich zmiany oraz usunięcia.</p>
                            </div>
                            <div className="button-send-container">
                                <button className="button-send"
                                    type="submit"
                                ><p className="button-send-text">wyślij</p></button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostForm
