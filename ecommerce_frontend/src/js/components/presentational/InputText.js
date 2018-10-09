import React from 'react'
import PropTypes from "prop-types"
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from '@material-ui/core/FormHelperText'

class InputText extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           showPassword: this.props.hideValue
        }
        this.handleType = this.handleType.bind(this)
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this)
    }

    handleType() {
        if (this.props.hideValue) {
            return this.state.showPassword ? 'password' : 'text'
        } else {
            return this.props.type
        }
    }

    static handleMouseDownPassword(event) {
        event.preventDefault()
    }

    handleClickShowPassword() {
        this.setState({ showPassword: !this.state.showPassword })
    }

    renderWithHideIcon() {
        return (
            <FormControl className={this.props.className} error={this.props.error}>
                <InputLabel>{this.props.label}</InputLabel>
                <Input
                    id={this.props.id}
                    type={this.handleType()}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    defaultValue={this.props.defaultValue}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={this.handleClickShowPassword}
                                onMouseDown={InputText.handleMouseDownPassword}>
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <FormHelperText>{this.props.helperText}</FormHelperText>
            </FormControl>
        )
    }

    renderNormal() {
        return (
            <FormControl className={this.props.className} error={this.props.error}>
                <InputLabel>{this.props.label}</InputLabel>
                <Input
                    id={this.props.id}
                    type={this.handleType()}
                    onChange={this.props.onChange}
                    value={this.props.value}
                    defaultValue={this.props.defaultValue}
                />
                <FormHelperText>{this.props.helperText}</FormHelperText>
            </FormControl>
        )
    }

    render() {
        if (this.props.hideValue) {
            return this.renderWithHideIcon()
        }
        return this.renderNormal()
    }

}

InputText.propTypes = {
    hideValue: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    helperText: PropTypes.string,
    className: PropTypes.string,
    error: PropTypes.bool,
    type: PropTypes.string,
    defaultValue: PropTypes.string,
}

export default InputText
