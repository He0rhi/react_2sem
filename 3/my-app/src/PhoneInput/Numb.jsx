import { Component } from "react";
import "./Number.css"


export default class Numb extends Component {
    constructor(props) { // Инициализация внутреннего состояния через присвоение объекта this.state.
        super(props); // Вызывает реакт. компонент
        this.state = {
            number: "",
            value: "",
            img: "",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        };
    }


    inputs = [
        {
            value: "Беларусь",
            code: "+375",
            img: "https://flagpedia.net/data/flags/h80/by.webp",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Украина",
            code: "+380",
            img: "https://flagpedia.net/data/flags/h80/ua.webp",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Россия",
            code: "+7",
            img: "https://flagpedia.net/data/flags/h80/ru.webp",
            mask: "XX (XXX) XXX-XX-XX",
            count: 12,
        },
    ];
  
    selectCountryHandler = (e) => { // Функция выбора страны
        this.setState({number: e.target.value,
            
        }); // Ссылка на объект (target)
        const select = document.getElementById('country');
        this.setState({
            img: `https://flagpedia.net/data/flags/h80/${select.selectedOptions[0].dataset.countrycode}.webp`
        });
    };
   
    HandleNumberChange = (e) => {
        this.setState(
            {
                number: e.target.value,
            },
            () => {
                this.inputs.map((item) => {
                    if (this.state.number === item.code)
                        this.setState({
                            value: item.value,
                            img: item.img,
                            mask: item.mask,
                            count: item.count,
                        });
                });
                if (this.state.count === this.state.number.length) {
                    let maskA = this.state.mask.split(""); // Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой
                    let numberA = this.state.number.split("");
                    for (let i = 0, j = 0; i < maskA.length; i++)
                        if (maskA[i] === "X") {
                            maskA[i] = numberA[j];
                            j++;
                        }
                    this.setState({ number: maskA.join("") }); // метод join() позволяет преобразовать и объединить все элементы массива в одно строковое значение
                }
            }
        );
    };
    render() {
        return (
            <>
                <label>
                <select
                                id="country"
                                onChange={this.selectCountryHandler}
                            >
                                <option value="" hidden>
                                    Select Country
                                </option>

                                <option data-countryCode="by" value="+375">
                                    Belarus (+375)
                                </option>
                                <option data-countryCode="ru" value="+7">
                                    Russia (+7)
                                </option>
                                <option data-countryCode="ua" value="+380">
                                    Ukraine (+380)
                                </option>


                            </select>
                    <img id="flag"
                        src={this.state.img}
                        style={{
                            height: "15px",
                            width: "30px",
                        }}
                    />
                    <input
                        placeholder="+375XXXXXXXX"
                        value={this.state.number}
                        onChange={this.HandleNumberChange}
                        maxLength={this.state.count}
                    />
                    <div>
                        <h2>Phone no:</h2>
                        <span >

                            {this.state.number}
                        </span> </div>
                </label>
                {
                    this.state.value ===
                    "Беларусь" && (
                        <div>
                            <input type="radio" name="1" />
                            МТС
                            <input type="radio" name="1" />
                            A1
                            <input type="radio" name="1" />
                            LIFE
                        </div>
                    )
                }
                {this.state.value === "Украина" && (
                    <div>
                        <input type="radio" name="1" />
                        Lifecell
                        <input type="radio" name="1" />
                        Vodafone
                        <input type="radio" name="1" />
                        Київстар
                    </div>
                )}
                {this.state.value === "Россия" && (
                    <div>
                        <input type="radio" name="1" />
                        Билайн
                        <input type="radio" name="1" />
                        Мегафон
                        <input type="radio" name="1" />
                        LIFE
                    </div>
                )}
            </>
        );
    }
}