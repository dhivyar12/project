<template>
    <div class="app">
        <form>
            <h1>Login into your account</h1>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" /><br><br>
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" /><br><br>
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button><br>

 
        </form>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {}
        }
    }
</script>