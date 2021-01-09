const Register = () => {
    return (
        <div>
            <h1 style={{marginBottom:'3rem'}}> Register User Page</h1>
            <form>
                <div class="form-group">
                    <label for="username">Name</label>
                    <input type="email" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="phone">Phone #</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Phone No" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Register