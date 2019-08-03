import React, { Component } from 'react';
import styles from './Pokecard.module.css';

class Pokecard extends Component {
    state = {
        frontStyles: '',
        backStyles: styles.back,
    }

    changeClass = () => {
        this.setState({ frontStyles: styles.frontStyles, backStyles: styles.backStyles })
        setTimeout(() => {
            this.song.play()
        }, 400);

        setTimeout(() => {
            this.setState({ frontStyles: '', backStyles: styles.back })
        }, 1000);
    }

    shouldComponentUpdate(nextState, nextProps) {
        return this.state !== nextState || this.props !== nextProps
    }

    render() {
        
        let cardbg = '';

        //Fire Classes
        if (this.props.abilities === 'Fire' ||
            this.props.abilities === 'Fire Flying' ||
            this.props.abilities === 'Fire Rock' ||
            this.props.abilities === 'Fire Fighting' ||
            this.props.abilities === 'Fire Ground' ||
            this.props.abilities === 'Fire Steel' ||
            this.props.abilities === 'Fire Psychic' ||
            this.props.abilities === 'Psychic Fire' ||
            this.props.abilities === 'Fire Normal' ||
            this.props.abilities === 'Bug Fire') {
            cardbg = styles.fire
        }
        else if (this.props.abilities === 'Dark Fire' ||
            this.props.abilities === 'Ghost Fire' ||
            this.props.abilities === 'Fire Ghost' ||
            this.props.abilities === 'Fire Dark') {
            cardbg = styles.darkFire
        }
        else if (this.props.abilities === 'Fire Dragon' ||
            this.props.abilities === 'Dragon Fire') {
            cardbg = styles.fireDragon
        }
        else if (this.props.abilities === 'Poison Fire') {
            cardbg = styles.poisonFire
        }
        else if (this.props.abilities === 'Fire Water') {
            cardbg = styles.fireWater
        }
        //Grass Classes
        else if (this.props.abilities === 'Grass' ||
            this.props.abilities === 'Bug Grass' ||
            this.props.abilities === 'Grass Flying' ||
            this.props.abilities === 'Grass Fighting' ||
            this.props.abilities === 'Rock Grass' ||
            this.props.abilities === 'Grass Fairy' ||
            this.props.abilities === 'Normal Grass'
        ) {
            cardbg = styles.grass
        }
        else if (this.props.abilities === 'Grass Poison' ||
            this.props.abilities === 'Grass Dark') {
            cardbg = styles.grassPoison
        }
        else if (this.props.abilities === 'Grass Psychic' ||
            this.props.abilities === 'Psychic Grass') {
            cardbg = styles.psyGrass
        }
        else if (this.props.abilities === 'Poison' ||
            this.props.abilities === 'Bug Poison' ||
            this.props.abilities === 'Water Poison' ||
            this.props.abilities === 'Poison Water' ||
            this.props.abilities === 'Poison Ground' ||
            this.props.abilities === 'Poison Flying' ||
            this.props.abilities === 'Poison Fighting' ||
            this.props.abilities === 'Poison Bug' ||
            this.props.abilities === 'Poison Dragon' ||
            this.props.abilities === 'Rock Poison') {
            cardbg = styles.poison
        }
        else if (this.props.abilities === 'Water' ||
            this.props.abilities === 'Water Dragon' ||
            this.props.abilities === 'Water Psychic' ||
            this.props.abilities === 'Water Fighting' ||
            this.props.abilities === 'Water Flying' ||
            this.props.abilities === 'Rock Water' ||
            this.props.abilities === 'Water Fairy' ||
            this.props.abilities === 'Water Ground' ||
            this.props.abilities === 'Water Rock' ||
            this.props.abilities === 'Bug Water' ||
            this.props.abilities === 'Water Bug'
        ) {
            cardbg = styles.water
        }
        else if (this.props.abilities === 'Bug') {
            cardbg = styles.bug
        }
        else if (this.props.abilities === 'Ice' ||
            this.props.abilities === 'Water Ice' ||
            this.props.abilities === 'Ice Flying' ||
            this.props.abilities === 'Fighting Ice' ||
            this.props.abilities === 'Rock Ice' ||
            this.props.abilities === 'Dragon Ice' ||
            this.props.abilities === 'Dark Ice' ||
            this.props.abilities === 'Grass Ice' ||
            this.props.abilities === 'Ice Ground' ||
            this.props.abilities === 'Ice Water') {
            cardbg = styles.ice
        }
        else if (this.props.abilities === 'Electric' ||
            this.props.abilities === 'Water Electric') {
            cardbg = styles.electric
        }
        else if (this.props.abilities === 'Ground' ||
            this.props.abilities === 'Rock Ground' ||
            this.props.abilities === 'Ground Rock') {
            cardbg = styles.ground
        }
        else if (this.props.abilities === 'Normal' ||
            this.props.abilities === 'Normal Flying' ||
            this.props.abilities === 'Normal Fairy') {
            cardbg = styles.normal
        }
        else if (this.props.abilities === 'Water Grass') {
            cardbg = styles.waterGrass
        }
        else if (this.props.abilities === 'Dark' ||
            this.props.abilities === 'Dark Flying' ||
            this.props.abilities === 'Rock Dark' ||
            this.props.abilities === 'Water Dark') {
            cardbg = styles.dark
        }
        else if (this.props.abilities === 'Ghost' ||
            this.props.abilities === 'Ghost Grass' ||
            this.props.abilities === 'Grass Ghost' ||
            this.props.abilities === 'Water Ghost' ||
            this.props.abilities === 'Ghost Poison' ||
            this.props.abilities === 'Poison Dark') {
            cardbg = styles.ghost
        }
        else if (this.props.abilities === 'Steel' ||
            this.props.abilities === 'Grass Steel' ||
            this.props.abilities === 'Water Steel'
        ) {
            cardbg = styles.steel
        }

        return (
            <div className={styles.card}>

                <div className={styles.side + ' ' + this.state.frontStyles} onClick={() => this.changeClass(this.props.id)} >
                    <div className={styles.imgBox + ' ' + cardbg} >
                        <img className={styles.img} src={this.props.imgSrc} alt="notfound" />
                        <p className={styles.id}>{this.props.id}</p>
                    </div>
                    <div className={styles.details}>
                        <h3 className={styles.name}>{this.props.name}</h3>
                        <p className={styles.ability}>{this.props.abilities}</p>
                        <audio ref={(song) => { this.song = song; }} preload='true'>
                            <source src={'/sounds/' + this.props.id.slice(1, 4) + '.wav'} type="audio/Wav" ></source>
                        </audio>
                    </div>
                </div>
                <div className={styles.side + ' ' + cardbg + ' ' + this.state.backStyles}>
                    <img className={styles.backImg} src={this.props.imgSrc} alt="notfound" />
                </div>
            </div>
        );
    }
}

export default Pokecard
