<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th colspan="2">
                        Datos de la agenda
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Nombre</th>
                    <td>{{ nombre }}</td>
                </tr>
                <tr>
                    <th scope="row">Local</th>
                    <td>{{ nombreLocal }}</td>
                </tr>
                <tr>
                    <th scope="row">Dirección</th>
                    <td>{{ direccionLocal }}</td>
                </tr>
                <tr>
                    <th scope="row">Dia</th>
                    <td>{{ dia }}</td>
                </tr>
                <tr>
                    <th scope="row">Hora</th>
                    <td>{{ hora }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ListaAgenda',
    props : [
        'nombre',
        'nombreLocal',
        'direccionLocal',
        'dia',
        'hora'
    ]
}
</script>