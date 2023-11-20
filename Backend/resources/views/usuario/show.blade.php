@extends('layouts.app')

@section('template_title')
    {{ $usuario->name ?? "{{ __('Show') Usuario" }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Usuario</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary" href="{{ route('usuarios.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body">
                        
                        <div class="form-group">
                            <strong>Id Usuario:</strong>
                            {{ $usuario->id_usuario }}
                        </div>
                        <div class="form-group">
                            <strong>Nombre:</strong>
                            {{ $usuario->nombre }}
                        </div>
                        <div class="form-group">
                            <strong>Ape1:</strong>
                            {{ $usuario->ape1 }}
                        </div>
                        <div class="form-group">
                            <strong>Ape2:</strong>
                            {{ $usuario->ape2 }}
                        </div>
                        <div class="form-group">
                            <strong>Email:</strong>
                            {{ $usuario->email }}
                        </div>
                        <div class="form-group">
                            <strong>Contrasena:</strong>
                            {{ $usuario->contrasena }}
                        </div>
                        <div class="form-group">
                            <strong>Foto:</strong>
                            {{ $usuario->foto }}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
