import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setStr, setDex, setCon, setInt, setWis, setCha } from '../redux'

import './Abilities.scss'
const Abilities = props => {
  const {
    str,
    dex,
    con,
    int,
    wis,
    cha,
    editStr,
    editDex,
    editCon,
    editInt,
    editWis,
    editCha,
  } = props
  const handleChange = ({ target: { name, value } }) => {
    const handlers = {
      str: val => editStr(Number(val)),
      dex: val => editDex(Number(val)),
      con: val => editCon(Number(val)),
      int: val => editInt(Number(val)),
      wis: val => editWis(Number(val)),
      cha: val => editCha(Number(val)),
    }
    if (name in handlers) handlers[name](value)
  }
  return (
    <div className="abilities">
      <label htmlFor="str">Str: </label>
      <input name="str" value={str} type="number" onChange={handleChange} />
      <br />
      <label htmlFor="dex">Dex: </label>
      <input name="dex" value={dex} type="number" onChange={handleChange} />
      <br />
      <label htmlFor="con">Con: </label>
      <input name="con" value={con} type="number" onChange={handleChange} />
      <br />
      <label htmlFor="int">Int: </label>
      <input name="int" value={int} type="number" onChange={handleChange} />
      <br />
      <label htmlFor="wis">Wis: </label>
      <input name="wis" value={wis} type="number" onChange={handleChange} />
      <br />
      <label htmlFor="cha">Cha: </label>
      <input name="cha" value={cha} type="number" onChange={handleChange} />
      <br />
    </div>
  )
}

const mapState = ({ abilities: { str, dex, con, int, wis, cha } }) => ({
  str,
  dex,
  con,
  int,
  wis,
  cha,
})

const mapDispatch = dispatch => ({
  editStr: str => dispatch(setStr(str)),
  editDex: dex => dispatch(setDex(dex)),
  editCon: con => dispatch(setCon(con)),
  editInt: int => dispatch(setInt(int)),
  editWis: wis => dispatch(setWis(wis)),
  editCha: cha => dispatch(setCha(cha)),
})

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Abilities)
)
