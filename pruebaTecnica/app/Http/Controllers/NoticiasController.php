<?php

namespace App\Http\Controllers;

use App\Noticias;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NoticiasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $noticias = Noticias::get();

        echo json_encode($noticias);
        /*
        $title = 'Noticias';
        return view('noticias', compact('title','noticias'));
        ¨*/
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
        $noticia = new Noticias();
        $noticia->titulo = $request['titulo'];
        $noticia->descripcion = $request['descripcion'];
        $noticia->save();
        echo json_encode($noticia);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Noticias  $noticias_id
     * @return \Illuminate\Http\Response
     */
    public function show($noticias_id)
    {
       $noticia = Noticias::find($noticias_id);
       echo json_encode($noticia);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Noticias  $noticias
     * @return \Illuminate\Http\Response
     */
    public function edit(Noticias $noticias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Noticias  $noticias_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $noticias_id)
    {
        $noticia = Noticias::find($noticias_id);
        $noticia->titulo = $request['titulo'];
        $noticia->descripcion = $request['descripcion'];
        $noticia->save();
        echo json_encode($noticia);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Noticias  $noticias_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($noticias_id)
    {
        $noticia = Noticias::find($noticias_id);
        $noticia->delete();
    }
}