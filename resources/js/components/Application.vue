<template>
  <div class="container">
    <h1>Application Form</h1>
    <p>Please fill in this form to job application.</p>
    <hr>
    <ValidationObserver v-slot="{ invalid }">
        <form method="POST" v-on:submit.prevent="submit" id="form">
            <div class="form-group">
                <label for="name"><b>Name</b></label>
                <validation-provider
                    name="Name"
                    rules="required"
                    v-slot="{ errors }"
                >
                <input 
                    type="text" 
                    placeholder="Enter Name" 
                    v-model="name" 
                    :class="[errors[0] ? 'form-control-red' : '']"
                />
                <small
                    class="text-danger font-weight-bold"
                    style="font-size: 11px">
                    {{ errors[0] }}
                </small>
                </validation-provider>
            </div>

            <div class="form-group">
                <label for="email"><b>Email</b></label>
                <validation-provider
                    name="Email"
                    rules="required|email"
                    v-slot="{ errors }"
                >
                <input 
                    type="text" 
                    placeholder="Enter Email" 
                    v-model="email"
                    :class="[errors[0] ? 'form-control-red' : '']"
                />
                <small
                    class="text-danger font-weight-bold"
                    style="font-size: 11px">
                    {{ errors[0] }}
                </small>
                </validation-provider>
            </div>

            <div class="form-group">
                <label for="address"><b>Address</b></label>
                <validation-provider
                    name="Address"
                    rules="required"
                    v-slot="{ errors }"
                >
                <input 
                    type="text" 
                    placeholder="Enter Address" 
                    v-model="address"
                    :class="[errors[0] ? 'form-control-red' : '']"
                />
                <small
                    class="text-danger font-weight-bold"
                    style="font-size: 11px">
                    {{ errors[0] }}
                </small>
                </validation-provider>
            </div>

            <div class="form-group">
                <label for="contact"><b>Contact Number</b></label>
                <validation-provider
                    name="Contact Number"
                    rules="required|digits:10"
                    v-slot="{ errors }"
                >
                <input 
                    type="text" 
                    placeholder="Enter Contact" 
                    v-model="contact"
                    :class="[errors[0] ? 'form-control-red' : '']"
                />

                <small
                    class="text-danger font-weight-bold"
                    style="font-size: 11px">
                    {{ errors[0] }}
                </small>
                </validation-provider>
            </div>

            <div class="form-group">
                <label for="eduction"><b>Education details</b></label>
                <div class="multi-input">
                    <div class="multi-sub-input">
                        <label for="board"><b>Board/University</b></label>
                        <validation-provider
                            name="Board/University"
                            rules="required"
                            v-slot="{ errors }"
                        >
                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter Board/University" 
                                v-model="board"
                                :class="[errors[0] ? 'form-control-red' : '']"
                            />
                        </div>
                        <small
                            class="text-danger font-weight-bold"
                            style="font-size: 11px">
                            {{ errors[0] }}
                        </small>
                        </validation-provider>
                    </div>
                    <div class="multi-sub-input">
                        <label for="year"><b>Year (Passout)</b></label>
                        <validation-provider
                            name="Year"
                            rules="required|digits:4"
                            v-slot="{ errors }"
                        >
                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter Year" 
                                v-model="year"
                                :class="[errors[0] ? 'form-control-red' : '']"
                            />
                        </div>
                        <small
                            class="text-danger font-weight-bold"
                            style="font-size: 11px">
                            {{ errors[0] }}
                        </small>
                        </validation-provider>
                    </div>
                    <div class="multi-sub-input">
                        <label for="percentage"><b>CGPA/Percentage</b></label>
                        <validation-provider
                            name="CGPA/Percentage"
                            rules="required"
                            v-slot="{ errors }"
                        >
                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter CGPA/Percentage" 
                                v-model="percentage"
                                :class="[errors[0] ? 'form-control-red' : '']"
                            />
                        </div>
                        <small
                            class="text-danger font-weight-bold"
                            style="font-size: 11px">
                            {{ errors[0] }}
                        </small>
                        </validation-provider>
                    </div>
                </div>
            </div>

            <div class="form-group work">
                <label for="percentage"><b>Work Experience</b></label>
                <ul class="addmore" v-if="experience.length">
                    <li class="addmore-label">
                        <label for="percentage" class="work-txt"><b>Company</b></label>  
                        <label for="percentage" class="work-txt"><b>Designation</b></label>
                        <label for="percentage" class="work-txt"><b>From</b></label>
                        <label for="percentage" class="work-txt"><b>To</b></label>
                        <label for="percentage" class="work-txt">&nbsp;</label>
                    </li>
                    <li v-for="(input, index) in experience" :key="index">
                        <div class="work-txt">
                            <input type="text" v-model="input.company">
                        </div>
                        <div class="work-txt">
                            <input type="text" v-model="input.designation">
                        </div> 
                        <datepicker v-model="input.from"></datepicker>
                        <datepicker v-model="input.to"></datepicker>
                        <div class="work-txt">
                            <button @click="deleteRow(index)" class="delete">Delete</button>
                        </div>
                    </li>
                </ul>
                <button type="button" @click="addRow" class="add-btn">Add Experience</button>
            </div>

            <div class="form-group">
                <label for="contact"><b>Gender</b></label>
                <div>
                    <validation-provider
                        name="Gender"
                        rules="required"
                        v-slot="{ errors }"
                    >
                    <label>
                        <input 
                            type="radio" 
                            v-model="gender" 
                            value="Male"> 
                            Male
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            v-model="gender" 
                            value="Female">
                            Female
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            v-model="gender" 
                            value="Other">
                            Other
                    </label>
                    <small
                        class="text-danger font-weight-bold"
                        style="font-size: 11px">
                        {{ errors[0] }}
                    </small>
                    </validation-provider>
                </div>
            </div>
            
            <div class="form-group">
                <label for="languages"><b>Known Languages</b></label>
                <div class="group-checkbox">
                    <div>
                        <label><input type="checkbox" v-model="hindi"> Hindi</label>
                        <label><input type="checkbox" v-model="hindiRead"  v-bind:disabled="hindi === false"> Read</label>
                        <label><input type="checkbox" v-model="hindiWrite"  v-bind:disabled="hindi === false"> Write</label>
                        <label><input type="checkbox" v-model="hindiSpeak"  v-bind:disabled="hindi === false"> Speak</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="language" v-model="english"> English</label>
                        <label><input type="checkbox" name="language" v-model="englishRead" v-bind:disabled="english === false"> Read</label>
                        <label><input type="checkbox" name="language" v-model="englishWrite" v-bind:disabled="english === false"> Write</label>
                        <label><input type="checkbox" name="language" v-model="englishSpeak" v-bind:disabled="english === false"> Speak</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="language" v-model="gujarati"> Gujarati</label>
                        <label><input type="checkbox" name="language" v-model="gujRead" v-bind:disabled="gujarati === false"> Read</label>
                        <label><input type="checkbox" name="language" v-model="gujWrite" v-bind:disabled="gujarati === false"> Write</label>
                        <label><input type="checkbox" name="language" v-model="gujSpeak" v-bind:disabled="gujarati === false"> Speak</label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="experience"><b>Technical Experience</b></label>
                <div class="group-checkbox">
                    <div>
                        <label><input type="checkbox" v-model="php"> PHP</label>
                        <label><input type="checkbox" v-model="phpBeginner" v-bind:disabled="php === false"> Beginner</label>
                        <label><input type="checkbox" v-model="phpMediator" v-bind:disabled="php === false"> Mediator</label>
                        <label><input type="checkbox" v-model="phpExpert" v-bind:disabled="php === false"> Expert</label>
                    </div>
                    <div>
                        <label><input type="checkbox" v-model="mysql"> MySql</label>
                        <label><input type="checkbox" v-model="mysqlBeginner" v-bind:disabled="mysql === false"> Beginner</label>
                        <label><input type="checkbox" v-model="mysqlMediator" v-bind:disabled="mysql === false"> Mediator</label>
                        <label><input type="checkbox" v-model="mysqlExpert" v-bind:disabled="mysql === false"> Expert</label>
                    </div>
                    <div>
                        <label><input type="checkbox" v-model="laravel"> Laravel</label>
                        <label><input type="checkbox" v-model="laravelBeginner" v-bind:disabled="laravel === false"> Beginner</label>
                        <label><input type="checkbox" v-model="laravelMediator" v-bind:disabled="laravel === false"> Mediator</label>
                        <label><input type="checkbox" v-model="laravelExpert" v-bind:disabled="laravel === false"> Expert</label>
                    </div>
                    <div>
                        <label><input type="checkbox" v-model="oracle"> Oracle</label>
                        <label><input type="checkbox" v-model="oracleBeginner" v-bind:disabled="oracle === false"> Beginner</label>
                        <label><input type="checkbox" v-model="oracleMediator" v-bind:disabled="oracle === false"> Mediator</label>
                        <label><input type="checkbox" v-model="oracleExpert" v-bind:disabled="oracle === false"> Expert</label>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label for="Preference"><b>Preference</b></label>
                <div class="multi-input">
                    <div class="preferred preferences">
                        <label for="location"><b>Preferred Location</b></label>
                        <validation-provider
                            name="Preferred Location"
                            rules="required"
                            v-slot="{ errors }"
                        >
                        <div>
                            <select 
                                class="location" 
                                v-model="location"
                                :class="[errors[0] ? 'form-control-red' : '']">
                                    <option>Ahmedabad</option>
                                    <option>Gandhinagar</option>
                                    <option>Surat</option>
                                    <option>Rajkot</option>
                                    <option>Baroda</option>
                                    <option>Junagadh</option>
                            </select>
                        </div>
                        <small
                            class="text-danger font-weight-bold"
                            style="font-size: 11px">
                            {{ errors[0] }}
                        </small>
                        </validation-provider>
                    </div>
                    <div class="cctc multi-sub-input">
                        <label for="cctc"><b>Current CTC (Annual)</b></label>
                        <validation-provider
                            name="Current CTC"
                            rules="required|numeric"
                            v-slot="{ errors }"
                        >
                        <div>
                            <input 
                                type="text" 
                                v-model="cctc"
                                :class="[errors[0] ? 'form-control-red' : '']">
                        </div>
                        <small
                            class="text-danger font-weight-bold"
                            style="font-size: 11px">
                            {{ errors[0] }}
                        </small>
                        </validation-provider>
                    </div>
                    <div class="ectc multi-sub-input">
                        <label for="ectc"><b>Expected CTC (Annual)</b></label>
                        <validation-provider
                            name="Expected CTC"
                            rules="required|numeric"
                            v-slot="{ errors }"
                        >
                        <div>
                            <input 
                                type="text" 
                                v-model="ectc"
                                :class="[errors[0] ? 'form-control-red' : '']"
                            >
                        </div>
                        <small
                            class="text-danger font-weight-bold"
                            style="font-size: 11px">
                            {{ errors[0] }}
                        </small>
                        </validation-provider>
                    </div>
                    <div class="notice multi-sub-input">
                        <validation-provider
                            name="Notice Period"
                            rules="required|numeric"
                            v-slot="{ errors }"
                        >
                        <label for="cctc"><b>Notice Period (In days)</b></label>
                        <div>
                            <input 
                                type="text" 
                                v-model="noticePeriod"
                                :class="[errors[0] ? 'form-control-red' : '']">
                        </div>
                        <small
                            class="text-danger font-weight-bold"
                            style="font-size: 11px">
                            {{ errors[0] }}
                        </small>
                        </validation-provider>
                    </div>
                </div>
            </div>
        
            <div class="clearfix">
                <button 
                    type="submit" 
                    class="signupbtn"
                    :disabled="invalid" 
                    >
                    <strong>Apply</strong>
                </button>
            </div>
        </form>
    </ValidationObserver>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import notification from "./../mixins/notify";

export default {
    data() {
        return {
            name: '',
            email: '',
            address: '',
            contact: '',
            board: '',
            year: '',
            percentage: '',
            experience: [],
            gender: '',
            location: '',
            cctc: '',
            ectc: '',
            noticePeriod: '',
            hindi: false,
            english: false,
            gujarati: false,
            hindiRead: false,
            hindiWrite: false,
            hindiSpeak: false,
            englishRead: false,
            englishWrite: false,
            englishSpeak: false,
            gujRead: false,
            gujWrite: false,
            gujSpeak: false,
            php: false,
            phpBeginner: false,
            phpMediator: false,
            phpExpert: false,
            mysql: false,
            mysqlBeginner: false,
            mysqlMediator: false,
            mysqlExpert: false,
            laravel: false,
            laravelBeginner: false,
            laravelMediator: false,
            laravelExpert: false,
            oracle: false,
            oracleBeginner: false,
            oracleMediator: false,
            oracleExpert: false,
        };
    },
    mixins: [notification],
    components: {
        Datepicker
    },

     methods: {
        addRow() {
            this.experience.push({
                company: '',
                designation: '',
                from: '',
                to: ''
            })
        },
        deleteRow(index) {
            this.experience.splice(index,1)
        },
        submit: function(event) {
            let technicalExp = {};
            let languages = {};

            if(this.php) {
                let php = [];
                if(this.phpBeginner) {
                    php.push('Beginner');
                }
                if(this.phpMediator) {
                    php.push('Mediator');
                }
                if(this.phpExpert) {
                    php.push('Expert');
                }
                technicalExp.php = php;
            }
            if(this.mysql) {
                let mysql = [];
                if(this.mysqlBeginner) {
                    mysql.push('Beginner');
                }
                if(this.mysqlMediator) {
                    mysql.push('Mediator');
                }
                if(this.mysqlExpert) {
                    mysql.push('Expert');
                }
                technicalExp.mysql = mysql;
            }
            if(this.laravel) {
                let laravel = [];
                if(this.laravelBeginner) {
                    laravel.push('Beginner');
                }
                if(this.laravelMediator) {
                    laravel.push('Mediator');
                }
                if(this.laravelExpert) {
                    laravel.push('Expert');
                }
                technicalExp.laravel = laravel;
            }
            if(this.oracle) {
                let oracle = [];
                if(this.oracleBeginner) {
                    oracle.push('Beginner');
                }
                if(this.oracleMediator) {
                    oracle.push('Mediator');
                }
                if(this.oracleExpert) {
                    oracle.push('Expert');
                }
                technicalExp.oracle = oracle;
            }

            if(this.hindi) {
                let hindi = [];
                if(this.hindiRead) {
                    hindi.push('Read');
                }
                if(this.hindiWrite) {
                    hindi.push('Write');
                }
                if(this.hindiSpeak) {
                    hindi.push('Speak');
                }
                languages.hindi = hindi;
            }

            if(this.english) {
                let english = [];
                if(this.englishRead) {
                    english.push('Read');
                }
                if(this.englishWrite) {
                    english.push('Write');
                }
                if(this.englishSpeak) {
                    english.push('Speak');
                }
                languages.english = english;
            }

            if(this.gujarati) {
                let gujarati = [];
                if(this.gujRead) {
                    gujarati.push('Read');
                }
                if(this.gujWrite) {
                    gujarati.push('Write');
                }
                if(this.gujSpeak) {
                    gujarati.push('Speak');
                }
                languages.gujarati = gujarati;
            }


            const payLoad = {
                name: this.name,
                email: this.email,
                address: this.address,
                contact: this.contact,
                board: this.board,
                percentage: this.percentage,
                year: this.year,
                gender: this.gender,
                location: this.location,
                cctc: this.cctc,
                ectc: this.ectc,
                noticePeriod: this.noticePeriod,
                workExperience: this.experience,
                technicalExp: technicalExp,
                languages: languages
            };

            axios
                .post("/api/application/submit", payLoad)
                .then(response => {
                if (response.data.status) {
                    this.success(response.data.msg);
                    window.location.reload();
                } else {
                    this.error(response.data.msg);
                }
                })
                .catch(error => {
                this.error(error);
                });

            var frm = document.getElementById('form');
            frm.reset();  // Reset
            return false; // Prevent page refresh
        }
    }

}
</script>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type=radio], input[type=checkbox]{
  padding: 15px;
  margin: 5px 0 22px 18px;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for all buttons */
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity:1;
}

/* Extra styles for the cancel button */
.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

/* Float cancel and signup buttons and add an equal width */
.cancelbtn, .signupbtn {
  float: left;
  width: 50%;
}

/* Add padding to container elements */
.container {
  padding: 16px;
}

.group-checkbox label {
    width: 100px;
}

.location {
    width: 200px;
    padding: 5px;
}
.multi-input {
    margin: 24px;
}
.preferences {
    margin-bottom: 1.5rem;
}
.multi-sub-input input {
    width: 50% !important;
}
.work button{
    width: 15%;
}
.work input {
    width: 20% !important;
}
.work .delete {
    background: #f44336;
}

.work .add-btn {
    margin-bottom: 20px;
}
.work-txt , .vdp-datepicker{
    width: 20%;
    float: left;
    padding: 0 10px;
}
.work-txt input, .vdp-datepicker input {
    width: 100% !important;
}
.addmore li {
    list-style: none;
    display: inline-block;
    width: 100%;
}
.work-txt .delete {
    width: 100%;
}
</style>