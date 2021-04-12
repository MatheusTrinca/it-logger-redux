import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog, clearCurrent } from '../../actions/logActions';

const EditLogModal = ({ log: { current }, updateLog, clearCurrent }) => {
  const [message, setMessage] = useState('');
  const [tech, setTech] = useState('');
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Plese fill all the fields' });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date(),
      };
      updateLog(updatedLog);
      setMessage('');
      setTech('');
      setAttention(false);
      clearCurrent();
    }
  };

  return (
    <div id="edit-log-modal" style={modalStyle} className="modal">
      <div className="modal-content">
        <h4>Edit System Logs</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select a Tech
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          onClick={onSubmit}
          href="#!"
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};

const mapStateToProps = (state) => ({
  log: state.log,
});

EditLogModal.propTypes = {
  log: PropTypes.object.isRequired,
  updateLog: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { updateLog, clearCurrent })(
  EditLogModal
);
