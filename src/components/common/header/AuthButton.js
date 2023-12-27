import React from 'react';

class AuthButton extends React.Component {

    render({isLogin}) {
        return (
            <button>
                {isLogin ? 'Login' : 'Logout'}
            </button>
        )
    }
}

export default AuthButton;