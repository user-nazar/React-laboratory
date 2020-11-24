import React, {Component} from 'react';
import CarouselBox from "../components/CarouselBox";
import Container from "react-bootstrap/cjs/Container";
import "../styles/home.css"
import football_club from "../images/fourth_image.jpg"
import player from "../images/first_image.jpg"
import table from "../images/second_image.jpg"
import team from "../images/third_image.jpg"

export default class Home extends Component {
    render() {
        return (
            <>
                <Container>
                    <img className="fourth_photo" src={football_club}/>
                </Container>

                <Container>
                    <h2 className="text-center"> A possible transfer of Ukrainian player for MU! </h2>
                    <img className="first_photo" src={player}/>
                    <p className="text-center">

                        Talented <q> Dynamo </q> defender Vitaliy Mykolenko could join <q> Manchester United </q>.
                        But Kyiv did not like the amount offered by the British for the young player.
                        The English club offered <q> Dynamo </q> bosses to hire a defender with a mandatory right of
                        redemption.
                        It is not yet reported how much <q> Manchester United </q> were willing to pay for Mykolenko,
                        but the amount seems to have been very substantial.
                        The leadership of Kyiv wants to raise about 40 million euros for a key defense player.
                        The British did not want to pay such a crazy amount. Therefore, they were refused.
                        This season, Mykolenko played 11 matches in a "blue and white" T-shirt, in which he twice
                        assisted his teammates.
                        Recently, there was information that the football giant <q> Milan </q> became seriously
                        interested in the footballer.
                        The Italians continue to closely monitor the game of the 21-year-old defender.
                        We will add that Mykolenko made his debut for the adult <q> Dynamo </q> team in the summer of
                        2017 and almost immediately began to show his best qualities.
                        Thanks to a good game in 2018, he deserved a call to the national team of Ukraine from Andriy
                        Shevchenko..</p>

                </Container>

                <Container>
                    <h2 className="text-center"> Champions League draw! </h2>
                    <img className="second_photo" src={table}/>
                </Container>

                <Container>
                    <h2 className="text-center"> This is a dream team! </h2>
                    <img className="third_photo" src={team}/>
                </Container>

                <Container>
                    <p className="first_text"> Name: David de Hea, National: Spain, Age: 29, Number: 1</p>
                    <p className="second_text"> Name: Bruno Fernandes, National: Portugal, Age: 27, Number: 18</p>
                    <p className="third_text"> Name: Harry Maguire, National: England, Age: 27, Number: 5</p>
                    <p className="fourth_text"> Name: Harry Maguire, National: England, Age: 27, Number: 5</p>
                    <p className="fifth_text"> Name: Harry Maguire, National: England, Age: 27, Number: 5</p>
                </Container>

            </>
        );
    }
}
