import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import Greeting from './greeting'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})

const mapDisptachToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDisptachToProps)(Greeting);
