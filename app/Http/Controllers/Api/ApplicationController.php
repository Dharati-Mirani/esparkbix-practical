<?php

namespace App\Http\Controllers\Api;

use App\Application;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\WorkExperience;
use Validator;

class ApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            if(isset($request->name) && !empty($request->name)) {
                $applications = Application::where('name', 'LIKE', '%' . $request->name . '%')->get();
            } else {
                $applications = Application::all();
            }

            if (count($applications) > 0) {
                $response = [
                    'msg' => 'List of Applications',
                    'status' => 1,
                    'applications' => $applications,
                ];
            } else {
                $response = [
                    'msg' => 'No application found',
                    'status' => 0,
                ];
            }
        } catch (\Exception $e) {
            $response = [
                'msg' => $e->getMessage() . " " . $e->getFile() . " " . $e->getLine(),
                'status' => 0,
            ];
        }

        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $application = Application::create([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'contact' => $request->contact,
                'board' => $request->board,
                'year' => $request->year,
                'percentage' => $request->percentage,
                'gender' => $request->gender,
                'language' => json_encode($request->languages),
                'technical_experience' => json_encode($request->technicalExp),
                'location' => $request->location,
                'cctc' => $request->cctc,
                'ectc' => $request->ectc,
                'notice_period' => $request->noticePeriod
            ]);
            if(isset($request->workExperience) && !empty($request->workExperience)) {
                $workExp = array();
                foreach ($request->workExperience as $key => $value) {
                    $exp =  new WorkExperience($value);
                    array_push($workExp, $exp);
                }
                $workExpe = $application->workExperiences()->saveMany($workExp);
            }
            if ($application) {
                $response = [
                    'msg' => 'Application Submitted Successfully',
                    'status' => 1,
                ];
            } else {
                $response = [
                    'msg' => 'Oops! Something went wrong',
                    'status' => 0,
                ];
            }
        } catch (\Exception $e) {
            $response = [
                'msg' => $e->getMessage() . " " . $e->getFile() . " " . $e->getLine(),
                'status' => 0,
            ];
        }

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        try {
            $applications = Application::where('id', $id)->with('workExperiences')->first();

            if ($applications) {
                $response = [
                    'msg' => 'View Applications',
                    'status' => 1,
                    'applications' => $applications,
                ];
            } else {
                $response = [
                    'msg' => 'No application found',
                    'status' => 0,
                ];
            }
        } catch (\Exception $e) {
            $response = [
                'msg' => $e->getMessage() . " " . $e->getFile() . " " . $e->getLine(),
                'status' => 0,
            ];
        }

        return response()->json($response);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'app_id' => 'required',
            ]);

            if ($validator->fails()) {
                $response = [
                    'msg' => $validator->error->all(),
                    'status' => 0,
                ];
            }

            $application = Application::whereId($request->app_id)->with('workExperiences')->first();

            if ($application) {
                $response = [
                    'msg' => 'Application details',
                    'status' => 1,
                    'application' => $application,
                ];
            } else {
                $response = [
                    'msg' => 'No such application found in the system',
                    'status' => 0,
                ];
            }
        } catch (\Exception $e) {
            $response = [
                'msg' => $e->getMessage() . " " . $e->getFile() . " " . $e->getLine(),
                'status' => 0,
            ];
        }

        return response()->json($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Application $application)
    {
        try {
            $application = Application::where('id', $request->id)->update([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
                'contact' => $request->contact,
                'board' => $request->board,
                'year' => $request->year,
                'percentage' => $request->percentage,
                'gender' => $request->gender,
                'language' => json_encode($request->languages),
                'technical_experience' => json_encode($request->technicalExp),
                'location' => $request->location,
                'cctc' => $request->cctc,
                'ectc' => $request->ectc,
                'notice_period' => $request->noticePeriod
            ]);
            $app = Application::where('id', $request->id)->first();
            if(isset($request->workExperience) && !empty($request->workExperience)) {
                $workExp = array();
                foreach ($request->workExperience as $key => $value) {
                    if(isset($value['id'])) {
                        WorkExperience::where('id', $value['id'])->update([
                            'company' => $value['company'],
                            'designation' => $value['designation'],
                            'from' => $value['from'],
                            'to' => $value['to']
                        ]);
                    } else {
                        $exp =  new WorkExperience($value);
                        array_push($workExp, $exp);
                    }
                }
                if(!empty($workExp)) {
                    $workExpe = $app->workExperiences()->saveMany($workExp);
                }
            }

            if(isset($request->deletedRow) && !empty($request->deletedRow)) {
                foreach($request->deletedRow as $value) {
                    WorkExperience::where('id', $value)->delete();
                }
            }
            
            if ($application) {
                $response = [
                    'msg' => 'Application Edit Successfully',
                    'status' => 1,
                ];
            } else {
                $response = [
                    'msg' => 'Oops! Something went wrong',
                    'status' => 0,
                ];
            }
        } catch (\Exception $e) {
            $response = [
                'msg' => $e->getMessage() . " " . $e->getFile() . " " . $e->getLine(),
                'status' => 0,
            ];
        }

        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Application  $application
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'app_id' => 'required',
            ]);

            if ($validator->fails()) {
                $response = [
                    'msg' => $validator->errors->all(),
                    'status' => 0,
                ];
            }

            $delete = Application::findOrFail($request->app_id);

            if ($delete) {
                $delete->delete();
                $delete->workExperiences()->delete();

                $application = Application::all();

                $response = [
                    'msg' => 'Application deleted successfully',
                    'status' => 1,
                    'application' => $application,
                ];
            } else {
                $response = [
                    'msg' => 'No such application found in the system',
                    'status' => 0,
                ];
            }
        } catch (\Exception $e) {
            $response = [
                'msg' => $e->getMessage() . " " . $e->getFile() . " " . $e->getLine(),
                'status' => 0,
            ];
        }

        return response()->json($response);
    }
}
