import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { iLocation, iStat } from '../interfaces/interfaces';
import { LocalStorage } from '../services/localStorage';

export default function CardDetail() {
  const location: iLocation = useLocation();
  const navigate = useNavigate();
  const localStorage = new LocalStorage();
  const [open, setOpen] = useState(false);
  const team = localStorage.getItem();

  function handleClick() {
    navigate('/');
  }

  function handleAdd() {
    team.push(location.state);
    localStorage.setItem(team);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  }

  return (
    <section className="card">
      <button onClick={handleClick}>
        <img src="/img/back.png" alt="back" />
      </button>
      <div className="a-box">
        <div className="card-header">
          <img
            src={location.state.sprites.front_default}
            alt={location.state.name}
          />
          <button onClick={handleAdd}>
            <img src="/img/plus.png" alt="add" />
          </button>
        </div>

        <div className="text-container">
          <h3>{location.state.name}</h3>

          <div>
            <p>Nº{location.state.id}</p>
            <div className="details">
              <p>Height: {location.state.height}</p>
              <p>Weight: {location.state.weight}</p>
              {location.state.stats.map((stat: iStat) => (
                <p key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <dialog open={open}>
        <div className="add">
          <img src="/img/check.png" alt="check" />
          <h3>Added!</h3>
        </div>
      </dialog>
    </section>
  );
}
