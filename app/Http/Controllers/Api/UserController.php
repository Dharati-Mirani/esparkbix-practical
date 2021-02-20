<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Validator;

class UserController extends Controller
{
    public function getUsers()
    {
        try {
            $users = User::all();

            if (count($users) > 0) {
                $response = [
                    'msg' => 'List of Users',
                    'status' => 1,
                    'users' => $users,
                ];
            } else {
                $response = [
                    'msg' => 'No users found',
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

    public function addUser(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'first_name' => 'required',
                'last_name' => 'required',
                'email' => 'required',
                'phone' => 'required',
                'password' => 'required',
            ]);

            if ($validator->fails()) {
                $response = [
                    'msg' => $validator->errors->all(),
                    'status' => 0,
                ];
            }

            $user = User::create($request->all());

            if ($user) {
                $response = [
                    'msg' => 'New user successfully added',
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

    public function userDetails(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'user_id' => 'required',
            ]);

            if ($validator->fails()) {
                $response = [
                    'msg' => $validator->error->all(),
                    'status' => 0,
                ];
            }

            $user = User::findOrFail($request->user_id);

            if ($user) {
                $response = [
                    'msg' => 'User details',
                    'status' => 1,
                    'user' => $user,
                ];
            } else {
                $response = [
                    'msg' => 'No such user found in the system',
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

    public function updateUser(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'id' => 'required',
                'first_name' => 'required',
                'last_name' => 'required',
                'email' => 'required',
                'phone' => 'required',
            ]);

            if ($validator->fails()) {
                $response = [
                    'msg' => $validator->errors->all(),
                    'status' => 0,
                ];
            }

            $user = User::where('id', $request->id)->update([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'phone' => $request->phone,
            ]);

            if ($user) {
                $response = [
                    'msg' => 'User details updated successfully',
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

    public function deleteUser(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'user_id' => 'required',
            ]);

            if ($validator->fails()) {
                $response = [
                    'msg' => $validator->errors->all(),
                    'status' => 0,
                ];
            }

            $delete = User::findOrFail($request->user_id);

            if ($delete) {
                $delete->delete();

                $users = User::all();

                $response = [
                    'msg' => 'User deleted successfully',
                    'status' => 1,
                    'users' => $users,
                ];
            } else {
                $response = [
                    'msg' => 'No such user found in the system',
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
