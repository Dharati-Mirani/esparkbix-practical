<template>
    <div class="row">
        <div class="col-sm-12">
            <div class="card mb-4">
                <h4 class="card-header">View Application</h4>
                <div class="card-body">
                    <table class="table">
                        <tr>
                            <td>Name</td>
                            <td>{{ application.name }}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{{ application.address }}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{{ application.email }}</td>
                        </tr>
                        <tr>
                            <td>Contact</td>
                            <td>{{ application.contact }}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{{ application.gender }}</td>
                        </tr>
                        <tr>
                            <td>Board/Universiry</td>
                            <td>{{ application.board }}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{{ application.year }}</td>
                        </tr>
                        <tr>
                            <td>Percentage/CGPA</td>
                            <td>{{ application.percentage }}</td>
                        </tr>
                        <tr>
                            <td>Location</td>
                            <td>{{ application.location }}</td>
                        </tr>
                        <tr>
                            <td>Current CTC</td>
                            <td>{{ application.cctc }}</td>
                        </tr>
                        <tr>
                            <td>Expected CTC</td>
                            <td>{{ application.ectc }}</td>
                        </tr>
                        <tr>
                            <td>Notice Periord (In days)</td>
                            <td>{{ application.notice_period }}</td>
                        </tr>
                        <tr>
                            <td>Work Experience</td>
                            <td>
                                <ol v-for="(exp, index) in application.work_experiences" :key="index">
                                    <li>
                                        <strong> Company </strong> - {{ exp.company }} ,
                                        <strong> Designation </strong> - {{ exp.designation}},
                                        <strong> From </strong> - {{ exp.from}},
                                        <strong> To </strong> - {{ exp.to}}
                                    </li>
                                </ol>
                            </td>
                        </tr>
                        <tr>
                            <td>Known Language</td>
                            <td>
                                <ul v-if="language.hindi">
                                    <strong>Hindi</strong>
                                    <li v-for="(lang, index) in language.hindi" :key="index">
                                        {{ lang }}
                                    </li>
                                </ul>
                                <ul v-if="language.english">
                                    <strong>English</strong>
                                    <li v-for="(lang, index) in language.english" :key="index">
                                        {{ lang }}
                                    </li>
                                </ul>
                                <ul v-if="language.gujarati">
                                    <strong>Gujarati</strong>
                                    <li v-for="(lang, index) in language.gujarati" :key="index">
                                        {{ lang }}
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Technical Experience</td>
                            <td>
                                <ul v-if="technicalExp.php">
                                    <strong>PHP</strong>
                                    <li v-for="(lang, index) in technicalExp.php" :key="index">
                                        {{ lang }}
                                    </li>
                                </ul>
                                <ul v-if="technicalExp.mysql">
                                    <strong>MySql</strong>
                                    <li v-for="(lang, index) in technicalExp.mysql" :key="index">
                                        {{ lang }}
                                    </li>
                                </ul>
                                <ul v-if="technicalExp.laravel">
                                    <strong>Laravel</strong>
                                    <li v-for="(lang, index) in technicalExp.laravel" :key="index">
                                        {{ lang }}
                                    </li>
                                </ul>
                                <ul v-if="technicalExp.oracle">
                                    <strong>Oracle</strong>
                                    <li v-for="(lang, index) in technicalExp.oracle" :key="index">
                                        {{ lang }}
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: this.$route.params.pathMatch,
            application: {},
            technicalExp: {},
            language: {},
        }
    },
    created() {
        this.getApplication();
    },
    methods: {
        getApplication() {

            axios
            .get("/api/application/show/"+this.id)
            .then(response => {
                if(response.data.status) {
                    this.application = response.data.applications;
                    this.technicalExp = JSON.parse(response.data.applications.technical_experience);
                    this.language = JSON.parse(response.data.applications.language);
                    console.log(this.language);
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
    }

}
</script>
<style scoped>
    
</style>