<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Noticias - Prueba Digevo</title>
    </head>
    <body>
        <h1>{{ $title }}</h1>
		<ul>
			@forelse ($noticias as $noticia)
				<li>{{ $noticia }}</li>
            @empty
                <li>No hay noticias registradas.</li>
			@endforelse
		</ul>
    </body>
</html>