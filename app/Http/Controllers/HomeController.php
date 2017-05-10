<?php
/**
 * Created by PhpStorm.
 * User: dyyhobby
 * Date: 2017/4/30
 * Time: 18:42
 */

namespace App\Http\Controllers;
use ConsoleTVs\Charts\Facades\Charts;

class HomeController extends Controller
{
    public function index()
    {

        $chart = Charts::multi('bar', 'material')
            // Setup the chart settings
            ->title("My Cool Chart")
            // A dimension of 0 means it will take 100% of the space
            ->dimensions(0, 400) // Width x Height
            // This defines a preset of colors already done:)
            ->template("material")
            // You could always set them manually
            // ->colors(['#2196F3', '#F44336', '#FFC107'])
            // Setup the diferent datasets (this is a multi chart)
            ->dataset('Element 1', [5,20,100])
            ->dataset('Element 2', [15,30,80])
            ->dataset('Element 3', [25,10,40])
            // Setup what the values mean
            ->labels(['One', 'Two', 'Three']);

        return view('welcome',['chart' => $chart]);

    }

    public function keyword()
    {

        return response()->json([
            'name' => 'dyyhobby',
            'sex'  => 25,
            'list' => [
                [
                    'id' => '10002545787',
                    'name' => '商品购买'
                ],
                [
                    'id' => '10002545788',
                    'name' => '商品预定'
                ]
            ]
        ]);

    }

    public function getOrder()
    {
        return response()->json([
            [
                'id' => 1,
                'no' => '123456789',
                'name' => '一箱苹果1'
            ],
            [
                'id' => 1,
                'no' => '123456788',
                'name' => '一箱苹果2'
            ],
            [
                'id' => 1,
                'no' => '123456787',
                'name' => '一箱苹果3'
            ],
            [
                'id' => 1,
                'no' => '123456786',
                'name' => '一箱苹果4'
            ]
        ]);
    }
}