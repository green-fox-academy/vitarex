modifyEsetfelvetel() {
  cosnt {
    ...values, kutya, macska, kapcsolatfelvetelModja,
      korabbiTol,
      korabbiIg,
      datum,
    } = this.esetfelvetelForm.value;
  const timeZone = Object.entries({ korabbiTol, korabbiTol }).map(
    ([k, v]) => [k,discardTimeZoneDifferences(v)]
  )

    const payload: EsetfelvetelModel = {
      ...values,
      ...Object.fromEntries(timeZone),
      jelzesId: this.jelzes.id,
      kapcsolatfelvetel: kapcsolatfelvetelModja,
      Parancs: 'update',
      Model: 'esetfelvetel',
      Id: this.esetfelvetel.id,
      IntezmenyId: this.stateService.intezmenyId.value
    };
}
