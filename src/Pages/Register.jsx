import React from 'react';

const Register = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="Display name" className="input input-bordered w-full max-w-xs" />
                <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                <input type="file" />
            </form>
        </div>
    );
};

export default Register;