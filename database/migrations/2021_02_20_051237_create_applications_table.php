<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email');
            $table->text('address');
            $table->string('contact');
            $table->string('board');
            $table->string('year');
            $table->decimal('percentage', 5,2);
            $table->longText('work_experience');
            $table->string('gender');
            $table->longText('language');
            $table->longText('technical_experience');
            $table->string('location');
            $table->bigInteger('cctc');
            $table->bigInteger('ectc');
            $table->integer('notice_period');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applications');
    }
}
