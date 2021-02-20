<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card mb-4">
        <h4 class="card-header">Edit Application</h4>
        <div class="card-body">
        <ValidationObserver v-slot="{ invalid }">
            <form method="POST" v-on:submit.prevent="updateApplication" id="form">
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
                                <input type="hidden" v-model="input.id">
                                <input type="text" v-model="input.company">
                            </div>
                            <div class="work-txt">
                                <input type="text" v-model="input.designation">
                            </div> 
                            <datepicker v-model="input.from"></datepicker>
                            <datepicker v-model="input.to"></datepicker>
                            <div class="work-txt">
                                <button @click="deleteRow(index, input.id)" class="delete">Delete</button>
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
                        <strong>Update</strong>
                    </button>
                </div>
            </form>
        </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notification from "./../../mixins/notify";
import Datepicker from 'vuejs-datepicker';

export default {
    mixins: [notification],
    data() {
        return {
            id: this.$route.params.pathMatch,
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
            deletedRow: [],
        };
    },
    components: {
        Datepicker
    },
    mounted() {
        this.appDetails();
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
        deleteRow(index, id) {
            if(id) {
                this.deletedRow.push(id);
            } 
            this.experience.splice(index,1)
        },
        appDetails() {
            const payLoad = {
                app_id: this.id
            };

            axios
            .post("/api/application/edit", payLoad)
            .then(response => {
            if (response.data.status) {
                this.name = response.data.application.name;
                this.email = response.data.application.email;
                this.address = response.data.application.address;
                this.contact = response.data.application.contact;
                this.board = response.data.application.board;
                this.year = response.data.application.year;
                this.percentage = response.data.application.percentage;
                this.experience = response.data.application.work_experiences;
                this.gender = response.data.application.gender;
                this.location = response.data.application.location;
                this.cctc = response.data.application.cctc;
                this.ectc = response.data.application.ectc;
                this.noticePeriod = response.data.application.notice_period;
                let language = JSON.parse(response.data.application.language);
                let technicalExp = JSON.parse(response.data.application.technical_experience);
                if(language.hindi) {
                    let hindi = language.hindi;
                    let that = this;
                    that.hindi = true;
                    hindi.forEach(function(lang) {
                        if(lang === 'Write') {
                            that.hindiWrite = true;
                        }
                        if(lang === 'Read') {
                            that.hindiRead = true;
                        }
                        if(lang === 'Speak') {
                            that.hindiSpeak = true;
                        }
                    });
                }
                if(language.english) {
                    let english = language.english;
                    let that = this;
                    that.english = true;
                    english.forEach(function(lang) {
                        if(lang === 'Write') {
                            that.englishWrite = true;
                        }
                        if(lang === 'Read') {
                            that.englishRead = true;
                        }
                        if(lang === 'Speak') {
                            that.englishSpeak = true;
                        }
                    });
                }
                if(language.gujarati) {
                    let guj = language.gujarati;
                    let that = this;
                    that.gujarati = true;
                    guj.forEach(function(lang) {
                        if(lang === 'Write') {
                            that.gujWrite = true;
                        }
                        if(lang === 'Read') {
                            that.gujRead = true;
                        }
                        if(lang === 'Speak') {
                            that.gujSpeak = true;
                        }
                    });
                }
                if(technicalExp.php) {
                    let php = technicalExp.php;
                    let that = this;
                    that.php = true;
                    php.forEach(function(lang) {
                        if(lang === 'Beginner') {
                            that.phpBeginner = true;
                        }
                        if(lang === 'Mediator') {
                            that.phpMediator = true;
                        }
                        if(lang === 'Expert') {
                            that.phpExpert = true;
                        }
                    });
                }
                if(technicalExp.mysql) {
                    let mysql = technicalExp.mysql;
                    let that = this;
                    that.mysql = true;
                    mysql.forEach(function(lang) {
                        if(lang === 'Beginner') {
                            that.mysqlBeginner = true;
                        }
                        if(lang === 'Mediator') {
                            that.mysqlMediator = true;
                        }
                        if(lang === 'Expert') {
                            that.mysqlExpert = true;
                        }
                    });
                }
                if(technicalExp.laravel) {
                    let laravel = technicalExp.laravel;
                    let that = this;
                    that.laravel = true;
                    laravel.forEach(function(lang) {
                        if(lang === 'Beginner') {
                            that.laravelBeginner = true;
                        }
                        if(lang === 'Mediator') {
                            that.laravelMediator = true;
                        }
                        if(lang === 'Expert') {
                            that.laravelExpert = true;
                        }
                    });
                }
                if(technicalExp.oracle) {
                    let oracle = technicalExp.oracle;
                    let that = this;
                    that.oracle = true;
                    oracle.forEach(function(lang) {
                        if(lang === 'Beginner') {
                            that.oracleBeginner = true;
                        }
                        if(lang === 'Mediator') {
                            that.oracleMediator = true;
                        }
                        if(lang === 'Expert') {
                            that.oracleExpert = true;
                        }
                    });
                }
            } else {
                this.$router.push("/admin/applications");
            }
            })
            .catch(error => {
            console.log(error);
            });
        },

        updateApplication() {
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
                id: this.id,
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
                languages: languages,
                deletedRow: this.deletedRow
            };
            axios
            .post("/api/application/update", payLoad)
            .then(response => {
                if (response.data.status == 1) {
                    this.success(response.data.msg);
                    this.$router.push("/admin/applications");
                }
                if (response.data.status != 1) {
                    this.error(response.data.msg);
                }
            })
            .catch(error => {
                this.error(error);
            });
        }
    }
};
</script>

<style scoped>
.form-control-red {
  border: 1px solid red !important;
}
.mx-input {
  border: 1px solid rgba(24, 28, 33, 0.1) !important;
  height: 37px !important;
}
</style>